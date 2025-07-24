import { QueryIssueTreeInfo } from './QueryIssueTreeInfo';


export class ListIssueTreeRequest {
    private 'project_id'?: string;
    private 'version_id'?: string;
    public body?: QueryIssueTreeInfo;
    public constructor(projectId?: string, versionId?: string) { 
        this['project_id'] = projectId;
        this['version_id'] = versionId;
    }
    public withProjectId(projectId: string): ListIssueTreeRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVersionId(versionId: string): ListIssueTreeRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withBody(body: QueryIssueTreeInfo): ListIssueTreeRequest {
        this['body'] = body;
        return this;
    }
}