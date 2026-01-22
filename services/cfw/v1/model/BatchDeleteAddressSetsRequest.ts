import { BatchDeleteAddressSetsDto } from './BatchDeleteAddressSetsDto';


export class BatchDeleteAddressSetsRequest {
    private 'project_id'?: string;
    public body?: BatchDeleteAddressSetsDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteAddressSetsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchDeleteAddressSetsDto): BatchDeleteAddressSetsRequest {
        this['body'] = body;
        return this;
    }
}