/**
 * The Unit of Work is a Design Pattern used in software development to manage transactions and database connections. It is typically used in conjunction with the Repository pattern to provide a way to group multiple operations into a single transaction.
 */
abstract class UnitOfWork {
  abstract readonly repository: any;
  abstract begin(): Promise<void>;
  abstract commit(): Promise<void>;
  abstract rollback(): Promise<void>;
}

abstract class UnitOfWorkWithTransaction {
  abstract withTransaction<T>(transaction: (connection: any) => Promise<T>);
}
