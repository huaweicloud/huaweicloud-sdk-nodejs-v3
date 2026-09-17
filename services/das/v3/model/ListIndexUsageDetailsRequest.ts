import { ListIndexUsageDetailsRequestBody } from './ListIndexUsageDetailsRequestBody';


export class ListIndexUsageDetailsRequest {
    private 'instance_id'?: string;
    public body?: ListIndexUsageDetailsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListIndexUsageDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListIndexUsageDetailsRequestBody): ListIndexUsageDetailsRequest {
        this['body'] = body;
        return this;
    }
}