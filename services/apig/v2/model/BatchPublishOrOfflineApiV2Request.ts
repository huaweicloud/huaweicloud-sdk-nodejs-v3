import { ApiBatchPublish } from './ApiBatchPublish';


export class BatchPublishOrOfflineApiV2Request {
    private 'instance_id'?: string;
    public action?: string;
    public body?: ApiBatchPublish;
    public constructor(instanceId?: string, action?: string) { 
        this['instance_id'] = instanceId;
        this['action'] = action;
    }
    public withInstanceId(instanceId: string): BatchPublishOrOfflineApiV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAction(action: string): BatchPublishOrOfflineApiV2Request {
        this['action'] = action;
        return this;
    }
    public withBody(body: ApiBatchPublish): BatchPublishOrOfflineApiV2Request {
        this['body'] = body;
        return this;
    }
}