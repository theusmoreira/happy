import multer, { StorageEngine } from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadsFolder = path.resolve(__dirname, '..', '..', 'uploads');

interface IUploadConfig {
  driver: 'disk';
  uploadsFolder: string;

  storage: StorageEngine;

}

export default {
  driver: 'disk',
  uploadsFolder,

  storage: multer.diskStorage({
    destination: uploadsFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.path}`;

      return callback(null, filename);
    },
  }),

} as IUploadConfig;
