import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionRepositories from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepositories = getCustomRepository(
      TransactionRepositories,
    );

    const transaction = await transactionsRepositories.findOne(id);

    if (!transaction) throw new AppError('Transaction does not exist');

    await transactionsRepositories.remove(transaction);
  }
}

export default DeleteTransactionService;
