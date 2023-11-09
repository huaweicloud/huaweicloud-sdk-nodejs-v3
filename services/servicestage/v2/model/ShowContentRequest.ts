

export class ShowContentRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    public path?: string;
    public ref?: string;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string, path?: string, ref?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
        this['path'] = path;
        this['ref'] = ref;
    }
    public withXRepoAuth(xRepoAuth: string): ShowContentRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): ShowContentRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): ShowContentRequest {
        this['project'] = project;
        return this;
    }
    public withPath(path: string): ShowContentRequest {
        this['path'] = path;
        return this;
    }
    public withRef(ref: string): ShowContentRequest {
        this['ref'] = ref;
        return this;
    }
}