import { BatchDeleteServiceSetsDto } from './BatchDeleteServiceSetsDto';


export class BatchDeleteServiceSetsRequest {
    private 'project_id'?: string;
    public body?: BatchDeleteServiceSetsDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteServiceSetsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchDeleteServiceSetsDto): BatchDeleteServiceSetsRequest {
        this['body'] = body;
        return this;
    }
}