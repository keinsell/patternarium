# Transactional outbox

The Transactional Outbox is a [[Design Pattern]] for reliably publishing events from a database within a transactional boundary. It is used in distributed systems to ensure that events are published atomically with the data changes that triggered them. 

In a distributed system, there may be multiple services or microservices that need to be updated when data changes. For example, when a new order is created, multiple services may need to be notified of the change, such as an inventory management service, a payment processing service, and a shipping service. 

The Transactional Outbox pattern addresses the challenge of reliably publishing events to these services in a distributed system. The basic idea is to store the events to be published in a separate table or collection in the same database as the data changes that triggered them. This allows the events to be published atomically with the data changes, within the same transactional boundary.

When a transaction is committed, the Transactional Outbox records are read and published to the appropriate services. If the publishing process fails for some reason, the records can be retried until the events are successfully published. 

This approach ensures that events are published atomically with the data changes, and that events are not lost or duplicated due to failures in the publishing process. 

- Good practice there is to store table for outbox messages in separated database from main application.

https://microservices.io/patterns/data/transactional-outbox.html