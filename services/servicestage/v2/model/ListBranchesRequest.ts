

export class ListBranchesRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
    }
    public withXRepoAuth(xRepoAuth: string): ListBranchesRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): ListBranchesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): ListBranchesRequest {
        this['project'] = project;
        return this;
    }
}