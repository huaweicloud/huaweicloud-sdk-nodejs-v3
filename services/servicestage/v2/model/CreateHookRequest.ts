import { HookCreate } from './HookCreate';


export class CreateHookRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    public body?: HookCreate;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
    }
    public withXRepoAuth(xRepoAuth: string): CreateHookRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): CreateHookRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): CreateHookRequest {
        this['project'] = project;
        return this;
    }
    public withBody(body: HookCreate): CreateHookRequest {
        this['body'] = body;
        return this;
    }
}