

export class ListCommitsRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    public ref?: string;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
    }
    public withXRepoAuth(xRepoAuth: string): ListCommitsRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): ListCommitsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): ListCommitsRequest {
        this['project'] = project;
        return this;
    }
    public withRef(ref: string): ListCommitsRequest {
        this['ref'] = ref;
        return this;
    }
}