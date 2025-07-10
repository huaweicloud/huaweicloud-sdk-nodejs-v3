

export class AssociateIssuesRequestBody {
    public branch?: string;
    private 'project_id'?: string;
    private 'related_id'?: Array<string>;
    private 'repo_id'?: string;
    public constructor(branch?: string, projectId?: string, relatedId?: Array<string>, repoId?: string) { 
        this['branch'] = branch;
        this['project_id'] = projectId;
        this['related_id'] = relatedId;
        this['repo_id'] = repoId;
    }
    public withBranch(branch: string): AssociateIssuesRequestBody {
        this['branch'] = branch;
        return this;
    }
    public withProjectId(projectId: string): AssociateIssuesRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRelatedId(relatedId: Array<string>): AssociateIssuesRequestBody {
        this['related_id'] = relatedId;
        return this;
    }
    public set relatedId(relatedId: Array<string>  | undefined) {
        this['related_id'] = relatedId;
    }
    public get relatedId(): Array<string> | undefined {
        return this['related_id'];
    }
    public withRepoId(repoId: string): AssociateIssuesRequestBody {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
}