

export class ShowProjectDetailRequest {
    private 'X-Repo-Auth'?: string;
    private 'clone_url'?: string;
    public constructor(xRepoAuth?: string, cloneUrl?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['clone_url'] = cloneUrl;
    }
    public withXRepoAuth(xRepoAuth: string): ShowProjectDetailRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withCloneUrl(cloneUrl: string): ShowProjectDetailRequest {
        this['clone_url'] = cloneUrl;
        return this;
    }
    public set cloneUrl(cloneUrl: string  | undefined) {
        this['clone_url'] = cloneUrl;
    }
    public get cloneUrl(): string | undefined {
        return this['clone_url'];
    }
}