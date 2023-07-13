import { BatchCreateOrDeleteTagReq } from './BatchCreateOrDeleteTagReq';


export class BatchCreateOrDeleteRocketmqTagRequest {
    private 'instance_id': string | undefined;
    public body?: BatchCreateOrDeleteTagReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchCreateOrDeleteRocketmqTagRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: BatchCreateOrDeleteTagReq): BatchCreateOrDeleteRocketmqTagRequest {
        this['body'] = body;
        return this;
    }
}