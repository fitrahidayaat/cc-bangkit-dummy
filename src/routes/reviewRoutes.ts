import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { upload } from "../middlewares/multerMiddleware";
import { getReviews, createReview, updateRating } from "../controllers/reviewController";

const reviewRoutes = Router();

reviewRoutes.get("/destination/:destinationId", getReviews); 
reviewRoutes.post("/", authMiddleware, upload.single('reviewPhoto'), createReview);
reviewRoutes.get("/updateRating", updateRating);

export default reviewRoutes;
