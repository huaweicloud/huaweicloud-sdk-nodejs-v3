import { CreateBatchTask } from './CreateBatchTask';


export class CreateBatchTaskRequest {
    private 'Instance-Id'?: string;
    public body?: CreateBatchTask;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateBatchTaskRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateBatchTask): CreateBatchTaskRequest {
        this['body'] = body;
        return this;
    }
}