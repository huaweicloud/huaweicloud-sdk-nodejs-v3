

export class Queue {
    public id?: number;
    public lag?: number;
    private 'broker_offset'?: number;
    private 'consumer_offset'?: number;
    private 'last_message_time'?: number;
    public constructor() { 
    }
    public withId(id: number): Queue {
        this['id'] = id;
        return this;
    }
    public withLag(lag: number): Queue {
        this['lag'] = lag;
        return this;
    }
    public withBrokerOffset(brokerOffset: number): Queue {
        this['broker_offset'] = brokerOffset;
        return this;
    }
    public set brokerOffset(brokerOffset: number  | undefined) {
        this['broker_offset'] = brokerOffset;
    }
    public get brokerOffset(): number | undefined {
        return this['broker_offset'];
    }
    public withConsumerOffset(consumerOffset: number): Queue {
        this['consumer_offset'] = consumerOffset;
        return this;
    }
    public set consumerOffset(consumerOffset: number  | undefined) {
        this['consumer_offset'] = consumerOffset;
    }
    public get consumerOffset(): number | undefined {
        return this['consumer_offset'];
    }
    public withLastMessageTime(lastMessageTime: number): Queue {
        this['last_message_time'] = lastMessageTime;
        return this;
    }
    public set lastMessageTime(lastMessageTime: number  | undefined) {
        this['last_message_time'] = lastMessageTime;
    }
    public get lastMessageTime(): number | undefined {
        return this['last_message_time'];
    }
}