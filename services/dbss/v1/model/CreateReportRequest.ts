import { CreateReportRequestBody } from './CreateReportRequestBody';


export class CreateReportRequest {
    private 'instance_id'?: string;
    public body?: CreateReportRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateReportRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateReportRequestBody): CreateReportRequest {
        this['body'] = body;
        return this;
    }
}