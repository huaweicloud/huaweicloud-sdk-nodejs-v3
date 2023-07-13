import { CreateConsumerGroupOrBatchDeleteConsumerGroupReq } from './CreateConsumerGroupOrBatchDeleteConsumerGroupReq';


export class CreateConsumerGroupOrBatchDeleteConsumerGroupRequest {
    private 'instance_id': string | undefined;
    public action?: string;
    public body?: CreateConsumerGroupOrBatchDeleteConsumerGroupReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateConsumerGroupOrBatchDeleteConsumerGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withAction(action: string): CreateConsumerGroupOrBatchDeleteConsumerGroupRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: CreateConsumerGroupOrBatchDeleteConsumerGroupReq): CreateConsumerGroupOrBatchDeleteConsumerGroupRequest {
        this['body'] = body;
        return this;
    }
}