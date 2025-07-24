import { RemoveIssuesInfo } from './RemoveIssuesInfo';


export class RemoveIssuesFromIteratorRequest {
    private 'project_id'?: string;
    private 'iterator_id'?: string;
    public body?: RemoveIssuesInfo;
    public constructor(projectId?: string, iteratorId?: string) { 
        this['project_id'] = projectId;
        this['iterator_id'] = iteratorId;
    }
    public withProjectId(projectId: string): RemoveIssuesFromIteratorRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIteratorId(iteratorId: string): RemoveIssuesFromIteratorRequest {
        this['iterator_id'] = iteratorId;
        return this;
    }
    public set iteratorId(iteratorId: string  | undefined) {
        this['iterator_id'] = iteratorId;
    }
    public get iteratorId(): string | undefined {
        return this['iterator_id'];
    }
    public withBody(body: RemoveIssuesInfo): RemoveIssuesFromIteratorRequest {
        this['body'] = body;
        return this;
    }
}