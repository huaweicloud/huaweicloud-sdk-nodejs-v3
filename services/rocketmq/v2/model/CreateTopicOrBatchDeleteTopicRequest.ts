import { CreateTopicOrBatchDeleteTopicReq } from './CreateTopicOrBatchDeleteTopicReq';


export class CreateTopicOrBatchDeleteTopicRequest {
    private 'instance_id'?: string;
    public action?: string;
    public body?: CreateTopicOrBatchDeleteTopicReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateTopicOrBatchDeleteTopicRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAction(action: string): CreateTopicOrBatchDeleteTopicRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: CreateTopicOrBatchDeleteTopicReq): CreateTopicOrBatchDeleteTopicRequest {
        this['body'] = body;
        return this;
    }
}