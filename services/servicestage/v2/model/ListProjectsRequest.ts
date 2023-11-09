

export class ListProjectsRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public constructor(xRepoAuth?: string, namespace?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
    }
    public withXRepoAuth(xRepoAuth: string): ListProjectsRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): ListProjectsRequest {
        this['namespace'] = namespace;
        return this;
    }
}