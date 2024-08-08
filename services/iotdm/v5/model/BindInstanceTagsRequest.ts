import { BindInstanceTags } from './BindInstanceTags';


export class BindInstanceTagsRequest {
    private 'instance_id'?: string;
    public body?: BindInstanceTags;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BindInstanceTagsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BindInstanceTags): BindInstanceTagsRequest {
        this['body'] = body;
        return this;
    }
}