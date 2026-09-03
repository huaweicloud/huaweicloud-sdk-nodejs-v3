import { CreateInstanceHealthReportTaskNewRequestBody } from './CreateInstanceHealthReportTaskNewRequestBody';


export class CreateInstanceHealthReportTaskNewRequest {
    private 'instance_id'?: string;
    public body?: CreateInstanceHealthReportTaskNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceHealthReportTaskNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateInstanceHealthReportTaskNewRequestBody): CreateInstanceHealthReportTaskNewRequest {
        this['body'] = body;
        return this;
    }
}