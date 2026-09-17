import { CreateMissingIndexExportTaskNewRequestBody } from './CreateMissingIndexExportTaskNewRequestBody';


export class CreateMissingIndexExportTaskNewRequest {
    private 'instance_id'?: string;
    public body?: CreateMissingIndexExportTaskNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateMissingIndexExportTaskNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateMissingIndexExportTaskNewRequestBody): CreateMissingIndexExportTaskNewRequest {
        this['body'] = body;
        return this;
    }
}