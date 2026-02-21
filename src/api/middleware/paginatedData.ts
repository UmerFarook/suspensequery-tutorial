import { retrieveThData } from "../services/memebership.service";
import { Request, Response, NextFunction } from "express";

export const paginatedData = async (
  req: Request,
  res: Response & { paginatedData?: any },
  next: NextFunction
) => {
  try {
    const { dataFromDb } = await retrieveThData();

    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;

    const startingIndex = (page - 1) * limit;
    const endingIndex = page * limit;

    // Attach the sliced paginated data to the response object
    res.paginatedData = Array.isArray(dataFromDb)
      ? dataFromDb.slice(startingIndex, endingIndex)
      : dataFromDb;

    next();
  } catch (err) {
    next(err);
  }
};
