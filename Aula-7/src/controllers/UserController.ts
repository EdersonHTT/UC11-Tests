import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
const userService = new UserService();

export class UserController {
  create(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;
      const user = userService.createUser(name, email);
      return response.status(201).json(user);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro interno';
      return response.status(400).json({ error: message });
    }
  }

  list(request: Request, response: Response): Response {
    const users = userService.listUsers();
    return response.status(200).json(users);
  }

  findById(request: Request, response: Response): Response {
    const id = Number(request.params.id);
    const user = userService.findUserById(id);
    if (!user) {
      return response.status(404).json({ error: 'Usuário não encontrado' });
    }
    return response.status(200).json(user);
  }

  findByEmail(request: Request, response: Response): Response {
    const email:string = request.params.email.toString();
    console.log(email)
    const user = userService.findUserByEmail(email);
    if (!user) {
      return response.status(404).json({ error: 'Usuário não encontrado' });
    }
    return response.status(200).json(user);
  }
}