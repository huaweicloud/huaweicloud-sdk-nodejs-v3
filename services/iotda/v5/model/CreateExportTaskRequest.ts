import { AddExportTask } from './AddExportTask';


export class CreateExportTaskRequest {
    private 'Instance-Id'?: string;
    public body?: AddExportTask;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateExportTaskRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddExportTask): CreateExportTaskRequest {
        this['body'] = body;
        return this;
    }
}