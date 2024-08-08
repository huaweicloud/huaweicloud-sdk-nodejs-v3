import { UnbindInstanceTags } from './UnbindInstanceTags';


export class UnbindInstanceTagsRequest {
    private 'instance_id'?: string;
    public body?: UnbindInstanceTags;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UnbindInstanceTagsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UnbindInstanceTags): UnbindInstanceTagsRequest {
        this['body'] = body;
        return this;
    }
}