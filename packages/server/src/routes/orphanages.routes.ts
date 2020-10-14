import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from '../controllers/OrphanagesController';
import uploadConfig from '../config/upload';

const orphanagesRouter = Router();
const orphanagesController = new OrphanagesController();
const upload = multer(uploadConfig);

orphanagesRouter.post('/', upload.array('images'), orphanagesController.create);
orphanagesRouter.get('/:id', orphanagesController.show);
orphanagesRouter.get('/', orphanagesController.index);

export default orphanagesRouter;
