import { TransForm } from './TransForm';


export class SinkKafkaParameters {
    public topic?: string;
    public keyTransform?: Array<TransForm>;
    public connectionId?: string;
    public constructor(topic?: string, connectionId?: string) { 
        this['topic'] = topic;
        this['connectionId'] = connectionId;
    }
    public withTopic(topic: string): SinkKafkaParameters {
        this['topic'] = topic;
        return this;
    }
    public withKeyTransform(keyTransform: Array<TransForm>): SinkKafkaParameters {
        this['keyTransform'] = keyTransform;
        return this;
    }
    public withConnectionId(connectionId: string): SinkKafkaParameters {
        this['connectionId'] = connectionId;
        return this;
    }
}