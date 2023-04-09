# Inbox Store

Inbox Store is a component of the [[Inbox]] pattern that provides a persistent store for messages that are waiting to be processed. The Inbox Store is responsible for storing incoming messages until they can be processed, ensuring that they are not lost or duplicated in the event of failures or other issues.

The Inbox Store typically provides an interface for storing messages in a reliable and durable way, as well as retrieving messages for processing. It may also provide other features such as message filtering or querying, or message expiration or deletion based on criteria such as age or priority.

In practice, the Inbox Store can be implemented using a variety of data stores or messaging systems, such as a relational database, a NoSQL database, a message broker, or a distributed cache. The choice of implementation will depend on the requirements of the application, such as performance, scalability, availability, and consistency.

By providing a reliable and durable store for messages, the Inbox Store component enables the Inbox pattern to provide a reliable and fault-tolerant messaging infrastructure that can handle large volumes of messages and ensure that they are processed correctly and efficiently.

```ts
interface InboxStore {
  /** A method that stores a new message in the Inbox Store. This method should ensure that the message is stored reliably and durably, such as by using a transactional write or a durable messaging system. */
  storeMessage(message: InboxMessage): Promise<void>;
  /** A method that retrieves the next available message from the Inbox Store for processing. This method should retrieve messages in a reliable and consistent way, such as by using locking or other concurrency control mechanisms to prevent duplicate processing. */
  getNextMessage(): Promise<InboxMessage | null>;
  /** A method that deletes a message from the Inbox Store after it has been successfully processed. This method should ensure that the message is deleted reliably and durably, such as by using a transactional delete or a durable messaging system. */
  deleteMessage(message: InboxMessage): Promise<void>;
  /** A method that retrieves the number of messages currently stored in the Inbox Store. This method can be used for monitoring or troubleshooting purposes, or for implementing load balancing or scaling strategies. */
  getMessageCount(): Promise<number>;
}
```
