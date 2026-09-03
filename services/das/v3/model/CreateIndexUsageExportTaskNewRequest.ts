import { CreateIndexUsageExportTaskNewRequestBody } from './CreateIndexUsageExportTaskNewRequestBody';


export class CreateIndexUsageExportTaskNewRequest {
    private 'instance_id'?: string;
    public body?: CreateIndexUsageExportTaskNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateIndexUsageExportTaskNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateIndexUsageExportTaskNewRequestBody): CreateIndexUsageExportTaskNewRequest {
        this['body'] = body;
        return this;
    }
}