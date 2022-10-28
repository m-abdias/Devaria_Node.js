import next from 'next'
import type { NextApiRequest, NextApiResponse } from 'next'
import {conectarMongoDB} from '../../middlewares/conectarMongoDB'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { login, senha } = req.body

    if (login === 'admin@admin.com' && senha === 'Admin@123') {
      return res.status(200).json({ msg: 'Usuário autenticado com Sucesso!' })
    }
    return res.status(400).json({ erro: 'Usuário ou senha não encontrado.' })
  }
  return res.status(405).json({ erro: 'Método informado não é válido' })
}
