import { ProjectCreate } from './ProjectCreate';


export class CreateProjectRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public body?: ProjectCreate;
    public constructor(xRepoAuth?: string, namespace?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
    }
    public withXRepoAuth(xRepoAuth: string): CreateProjectRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): CreateProjectRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withBody(body: ProjectCreate): CreateProjectRequest {
        this['body'] = body;
        return this;
    }
}