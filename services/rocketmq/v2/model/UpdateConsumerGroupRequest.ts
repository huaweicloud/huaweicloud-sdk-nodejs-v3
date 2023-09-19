import { UpdateConsumerGroup } from './UpdateConsumerGroup';


export class UpdateConsumerGroupRequest {
    private 'instance_id'?: string;
    public group?: string;
    public body?: UpdateConsumerGroup;
    public constructor(instanceId?: string, group?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): UpdateConsumerGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): UpdateConsumerGroupRequest {
        this['group'] = group;
        return this;
    }
    public withBody(body: UpdateConsumerGroup): UpdateConsumerGroupRequest {
        this['body'] = body;
        return this;
    }
}