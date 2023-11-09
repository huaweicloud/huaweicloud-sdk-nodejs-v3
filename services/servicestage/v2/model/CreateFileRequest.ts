import { FileCreate } from './FileCreate';


export class CreateFileRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    public path?: string;
    public ref?: string;
    public body?: FileCreate;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string, path?: string, ref?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
        this['path'] = path;
        this['ref'] = ref;
    }
    public withXRepoAuth(xRepoAuth: string): CreateFileRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): CreateFileRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): CreateFileRequest {
        this['project'] = project;
        return this;
    }
    public withPath(path: string): CreateFileRequest {
        this['path'] = path;
        return this;
    }
    public withRef(ref: string): CreateFileRequest {
        this['ref'] = ref;
        return this;
    }
    public withBody(body: FileCreate): CreateFileRequest {
        this['body'] = body;
        return this;
    }
}