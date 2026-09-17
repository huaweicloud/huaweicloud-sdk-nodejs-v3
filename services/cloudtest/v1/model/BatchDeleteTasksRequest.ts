import { DeleteTaskInfo } from './DeleteTaskInfo';


export class BatchDeleteTasksRequest {
    private 'project_uuid'?: string;
    public body?: DeleteTaskInfo;
    public constructor(projectUuid?: string) { 
        this['project_uuid'] = projectUuid;
    }
    public withProjectUuid(projectUuid: string): BatchDeleteTasksRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withBody(body: DeleteTaskInfo): BatchDeleteTasksRequest {
        this['body'] = body;
        return this;
    }
}