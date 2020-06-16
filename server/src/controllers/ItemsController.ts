import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.112:3333/uploads/${item.image}`,
      };
    });
  
    return response.json(serializedItems);
  }
}

// padrao dos metodos de um controller
// index - para listar varios registros
// show - para listar apenas 1 registro
// create - para criar um registro
// update - para atualizar um registro
// delete - para deletar um registro

export default ItemsController;