import { ListIssueRequestV4 } from './ListIssueRequestV4';


export class ListIssuesV4Request {
    private 'project_id'?: string;
    public body?: ListIssueRequestV4;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListIssuesV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ListIssueRequestV4): ListIssuesV4Request {
        this['body'] = body;
        return this;
    }
}