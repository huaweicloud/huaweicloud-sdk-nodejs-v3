import { DeleteConsumerGroupOffsetsRequestBody } from './DeleteConsumerGroupOffsetsRequestBody';


export class DeleteConsumerGroupOffsetsRequest {
    private 'instance_id'?: string;
    public group?: string;
    public body?: DeleteConsumerGroupOffsetsRequestBody;
    public constructor(instanceId?: string, group?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): DeleteConsumerGroupOffsetsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): DeleteConsumerGroupOffsetsRequest {
        this['group'] = group;
        return this;
    }
    public withBody(body: DeleteConsumerGroupOffsetsRequestBody): DeleteConsumerGroupOffsetsRequest {
        this['body'] = body;
        return this;
    }
}