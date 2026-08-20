import { SnapshotIssueRequest } from './SnapshotIssueRequest';


export class ListIssueBySnapIdsRequest {
    private 'project_id'?: string;
    public body?: SnapshotIssueRequest;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListIssueBySnapIdsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: SnapshotIssueRequest): ListIssueBySnapIdsRequest {
        this['body'] = body;
        return this;
    }
}