

export class DeleteTagRequest {
    private 'X-Repo-Auth'?: string;
    public namespace?: string;
    public project?: string;
    private 'tag_name'?: string;
    public constructor(xRepoAuth?: string, namespace?: string, project?: string, tagName?: string) { 
        this['X-Repo-Auth'] = xRepoAuth;
        this['namespace'] = namespace;
        this['project'] = project;
        this['tag_name'] = tagName;
    }
    public withXRepoAuth(xRepoAuth: string): DeleteTagRequest {
        this['X-Repo-Auth'] = xRepoAuth;
        return this;
    }
    public set xRepoAuth(xRepoAuth: string  | undefined) {
        this['X-Repo-Auth'] = xRepoAuth;
    }
    public get xRepoAuth(): string | undefined {
        return this['X-Repo-Auth'];
    }
    public withNamespace(namespace: string): DeleteTagRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withProject(project: string): DeleteTagRequest {
        this['project'] = project;
        return this;
    }
    public withTagName(tagName: string): DeleteTagRequest {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
}