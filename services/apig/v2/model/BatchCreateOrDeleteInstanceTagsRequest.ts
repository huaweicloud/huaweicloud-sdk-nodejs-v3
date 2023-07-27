import { TmsUpdatePublicReq } from './TmsUpdatePublicReq';


export class BatchCreateOrDeleteInstanceTagsRequest {
    private 'instance_id'?: string;
    public body?: TmsUpdatePublicReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchCreateOrDeleteInstanceTagsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: TmsUpdatePublicReq): BatchCreateOrDeleteInstanceTagsRequest {
        this['body'] = body;
        return this;
    }
}