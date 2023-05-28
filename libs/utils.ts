import {extension} from 'mime-types';
import * as crypto from 'node:crypto';

export class Helper {
  static customFileName(req, file, cb) {
    const uuid = crypto.randomUUID();

    const fileExtension = extension(file.mimetype);
    const hashName = `${uuid}.${fileExtension}`;

    cb(null, hashName);
  }

  static destinationPath(req, file, cb) {
    cb(null, './uploads/');
  }
}

export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
