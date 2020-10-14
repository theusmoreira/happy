import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default class OrphanagesController {
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

      const orphanagesRepository = getRepository(Orphanage);

      const orphanage = orphanagesRepository.create({
        name,
        about,
        instructions,
        latitude,
        longitude,
        open_on_weekends,
        opening_hours,
      });

      await orphanagesRepository.save(orphanage);

      return response.status(201).json(orphanage);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
