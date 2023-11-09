

export class DeleteHookRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    private 'hook_id'?: string;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string, hookId?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
        this['hook_id'] = hookId;
    }
    public withXRepoAuth(xRepoAuth: string): DeleteHookRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): DeleteHookRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): DeleteHookRequest {
        this['project'] = project;
        return this;
    }
    public withHookId(hookId: string): DeleteHookRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
}