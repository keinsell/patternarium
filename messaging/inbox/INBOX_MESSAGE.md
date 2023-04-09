# Inbox Message

Inbox Message is a data structure that represents a message waiting to be processed in the Inbox pattern. An Inbox Message typically contains information about the content of the message, as well as any metadata that may be required for processing or routing the message.

Some common properties of an Inbox Message might include:

- `id`: A unique identifier for the message, which can be used for deduplication or tracking purposes.
- `content`: The actual content of the message, which can be in any format or protocol required by the application or its consumers.
- `timestamp`: The time at which the message was received or created, which can be used for sorting or prioritization purposes.
- `headers`: Any additional metadata or routing information required for processing or routing the message, such as the destination or topic of the message.

In practice, the structure and properties of an Inbox Message may vary depending on the requirements of the application or the messaging system being used. For example, some messaging systems may require additional properties or headers to enable features such as message expiration, priority, or tracing.

```ts
interface InboxMessage {
  /** A unique identifier for the message, which can be a string or a number. */
  id: string;
  /** The actual content of the message, which can be any type of data or object. */
  content: any;
  /** The time at which the message was received or created, which is a Date object. */
  timestamp: Date;
  /** Any additional metadata or routing information required for processing or routing the message, which is an optional object that can contain key-value pairs of header values. */
  headers?: { [key: string]: string };
}
```
