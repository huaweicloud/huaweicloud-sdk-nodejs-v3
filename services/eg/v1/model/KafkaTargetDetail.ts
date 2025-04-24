import { KafkaTargetDetailKeyTransform } from './KafkaTargetDetailKeyTransform';


export class KafkaTargetDetail {
    public topic?: string;
    public keyTransform?: KafkaTargetDetailKeyTransform;
    public constructor(topic?: string) { 
        this['topic'] = topic;
    }
    public withTopic(topic: string): KafkaTargetDetail {
        this['topic'] = topic;
        return this;
    }
    public withKeyTransform(keyTransform: KafkaTargetDetailKeyTransform): KafkaTargetDetail {
        this['keyTransform'] = keyTransform;
        return this;
    }
}