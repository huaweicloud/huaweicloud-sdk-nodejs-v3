

export class IefEvent {
    private 'event_type'?: string;
    public operation?: string;
    public timestamp?: number;
    public topic?: string;
    public name?: string;
    public attributes?: string;
    public constructor(eventType?: string, operation?: string, timestamp?: number, topic?: string, name?: string) { 
        this['event_type'] = eventType;
        this['operation'] = operation;
        this['timestamp'] = timestamp;
        this['topic'] = topic;
        this['name'] = name;
    }
    public withEventType(eventType: string): IefEvent {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withOperation(operation: string): IefEvent {
        this['operation'] = operation;
        return this;
    }
    public withTimestamp(timestamp: number): IefEvent {
        this['timestamp'] = timestamp;
        return this;
    }
    public withTopic(topic: string): IefEvent {
        this['topic'] = topic;
        return this;
    }
    public withName(name: string): IefEvent {
        this['name'] = name;
        return this;
    }
    public withAttributes(attributes: string): IefEvent {
        this['attributes'] = attributes;
        return this;
    }
}