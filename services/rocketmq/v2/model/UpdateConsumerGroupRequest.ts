import { ConsumerGroup } from './ConsumerGroup';


export class UpdateConsumerGroupRequest {
    private 'instance_id': string | undefined;
    public group: string;
    public body?: ConsumerGroup;
    public constructor(instanceId?: any, group?: any) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): UpdateConsumerGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withGroup(group: string): UpdateConsumerGroupRequest {
        this['group'] = group;
        return this;
    }
    public withBody(body: ConsumerGroup): UpdateConsumerGroupRequest {
        this['body'] = body;
        return this;
    }
}