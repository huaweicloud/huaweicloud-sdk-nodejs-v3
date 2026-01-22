import { DeleteBlackWhiteDto } from './DeleteBlackWhiteDto';


export class BatchDeleteBlackWhiteListsRequest {
    private 'project_id'?: string;
    public body?: DeleteBlackWhiteDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteBlackWhiteListsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: DeleteBlackWhiteDto): BatchDeleteBlackWhiteListsRequest {
        this['body'] = body;
        return this;
    }
}