import { ApiActionInfo } from './ApiActionInfo';


export class CreateOrDeletePublishRecordForApiV2Request {
    private 'instance_id'?: string;
    public body?: ApiActionInfo;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateOrDeletePublishRecordForApiV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ApiActionInfo): CreateOrDeletePublishRecordForApiV2Request {
        this['body'] = body;
        return this;
    }
}