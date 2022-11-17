import { CreateOrDeleteInstanceTags } from './CreateOrDeleteInstanceTags';


export class BatchCreateOrDeleteTagsRequest {
    private 'instance_id': string | undefined;
    public body?: CreateOrDeleteInstanceTags;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchCreateOrDeleteTagsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: CreateOrDeleteInstanceTags): BatchCreateOrDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}