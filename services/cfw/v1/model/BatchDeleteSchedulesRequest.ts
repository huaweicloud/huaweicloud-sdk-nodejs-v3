import { BatchDeleteSchedulesRequestBody } from './BatchDeleteSchedulesRequestBody';


export class BatchDeleteSchedulesRequest {
    private 'project_id'?: string;
    public body?: BatchDeleteSchedulesRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteSchedulesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchDeleteSchedulesRequestBody): BatchDeleteSchedulesRequest {
        this['body'] = body;
        return this;
    }
}