

export class DeleteFileRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    public path?: string;
    public ref?: string;
    public message?: string;
    public sha?: string;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string, path?: string, ref?: string, message?: string, sha?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
        this['path'] = path;
        this['ref'] = ref;
        this['message'] = message;
        this['sha'] = sha;
    }
    public withXRepoAuth(xRepoAuth: string): DeleteFileRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): DeleteFileRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): DeleteFileRequest {
        this['project'] = project;
        return this;
    }
    public withPath(path: string): DeleteFileRequest {
        this['path'] = path;
        return this;
    }
    public withRef(ref: string): DeleteFileRequest {
        this['ref'] = ref;
        return this;
    }
    public withMessage(message: string): DeleteFileRequest {
        this['message'] = message;
        return this;
    }
    public withSha(sha: string): DeleteFileRequest {
        this['sha'] = sha;
        return this;
    }
}