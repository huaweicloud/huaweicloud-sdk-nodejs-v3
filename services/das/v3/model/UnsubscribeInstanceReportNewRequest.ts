import { UnsubscribeInstanceReportNewRequestBody } from './UnsubscribeInstanceReportNewRequestBody';


export class UnsubscribeInstanceReportNewRequest {
    private 'instance_id'?: string;
    public body?: UnsubscribeInstanceReportNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UnsubscribeInstanceReportNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UnsubscribeInstanceReportNewRequestBody): UnsubscribeInstanceReportNewRequest {
        this['body'] = body;
        return this;
    }
}