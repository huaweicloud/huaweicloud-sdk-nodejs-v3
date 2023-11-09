

export class ListNamespacesRequest {
    private 'X-Repo-Auth'?: string;
    public constructor(xRepoAuth?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public withXRepoAuth(xRepoAuth: string): ListNamespacesRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
}