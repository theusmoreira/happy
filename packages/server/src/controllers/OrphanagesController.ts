import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default class OrphanagesController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const orphanagesRepository = getRepository(Orphanage);

      const orphanages = await orphanagesRepository.find();

      return response.json(orphanages);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const orphanagesRepository = getRepository(Orphanage);

      const orphanage = await orphanagesRepository.findOneOrFail(id);

      return response.json(orphanage);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        open_on_weekends,
        opening_hours,
      } = request.body;

      const requestImages = request.files as Express.Multer.File[];
      const images = requestImages.map((image) => ({
        path: image.filename,
      }));

      const orphanagesRepository = getRepository(Orphanage);

      const orphanage = orphanagesRepository.create({
        name,
        about,
        instructions,
        latitude,
        longitude,
        open_on_weekends,
        opening_hours,
        images,
      });

      await orphanagesRepository.save(orphanage);

      return response.status(201).json(orphanage);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
