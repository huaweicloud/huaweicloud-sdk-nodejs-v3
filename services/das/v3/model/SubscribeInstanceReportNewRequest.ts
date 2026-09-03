import { SubscribeInstanceReportNewRequestBody } from './SubscribeInstanceReportNewRequestBody';


export class SubscribeInstanceReportNewRequest {
    private 'instance_id'?: string;
    public body?: SubscribeInstanceReportNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SubscribeInstanceReportNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SubscribeInstanceReportNewRequestBody): SubscribeInstanceReportNewRequest {
        this['body'] = body;
        return this;
    }
}