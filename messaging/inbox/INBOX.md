# Inbox

Inbox pattern is a [[messaging pattern]] used in [[distributed system]] to reliably process asynchronous messages. The Inbox pattern is similar to the [[Message Queue]] pattern, but it places greater emphasis on handling failures and processing messages in a reliable and fault-tolerant manner.

In the Inbox pattern, incoming messages are stored in a persistent inbox or message store ([[Inbox Store]]) until they can be processed by a message processor or worker ([[Inbox Processor]]). The message processor retrieves messages from the inbox and processes them in a reliable and consistent way, handling failures and retrying failed messages as necessary. After a message is successfully processed, it is deleted from the inbox.

The Inbox pattern can be implemented using a variety of messaging systems, such as message queues, databases, or distributed caches. It is typically used in distributed systems that require asynchronous communication and processing, such as event-driven architectures, microservices, or cloud-based applications.

- [[Inbox Store]]
- [[Inbox Message]]
- [[Inbox Processor]]
- [[Message Handler]]
- [[Message Router]]
- [[Retry Strategy]]
