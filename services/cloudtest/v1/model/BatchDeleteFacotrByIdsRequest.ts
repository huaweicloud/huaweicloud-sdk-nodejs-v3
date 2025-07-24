import { CommRequestListString } from './CommRequestListString';


export class BatchDeleteFacotrByIdsRequest {
    private 'project_id'?: string;
    public body?: CommRequestListString;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteFacotrByIdsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestListString): BatchDeleteFacotrByIdsRequest {
        this['body'] = body;
        return this;
    }
}