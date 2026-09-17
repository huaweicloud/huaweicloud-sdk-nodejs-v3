import { ListMissingIndexDetailsRequestBody } from './ListMissingIndexDetailsRequestBody';


export class ListMissingIndexDetailsRequest {
    private 'instance_id'?: string;
    public body?: ListMissingIndexDetailsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListMissingIndexDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListMissingIndexDetailsRequestBody): ListMissingIndexDetailsRequest {
        this['body'] = body;
        return this;
    }
}