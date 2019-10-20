paginateItems = model => {
  async (req, res, next) => {
    const page = req.query.page * 1;
    const limit = req.query.limit * 1;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < model.countDocuments().exec()) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit
      };
    }

    try {
      results.results = await model
        .find()
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.paginatedItems = results;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

module.exports.paginateItems = paginateItems;
