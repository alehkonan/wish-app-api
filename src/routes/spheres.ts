import { RequestHandler, Router } from 'express';
import { spheres } from '../data/spheres';

const router = Router();

const getSpheresHandler: RequestHandler = (req, res) => {
  res.json({ spheres });
};

router.get('/spheres', getSpheresHandler);
router.post('/spheres', getSpheresHandler);

export default router;
