

export class ListTreesRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    public ref?: string;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string, ref?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
        this['ref'] = ref;
    }
    public withXRepoAuth(xRepoAuth: string): ListTreesRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): ListTreesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): ListTreesRequest {
        this['project'] = project;
        return this;
    }
    public withRef(ref: string): ListTreesRequest {
        this['ref'] = ref;
        return this;
    }
}