

export class RepositoryBriefDto {
    public id?: number;
    public name?: string;
    public path?: string;
    private 'path_with_namespace'?: string;
    private 'project_name'?: string;
    public constructor() { 
    }
    public withId(id: number): RepositoryBriefDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepositoryBriefDto {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): RepositoryBriefDto {
        this['path'] = path;
        return this;
    }
    public withPathWithNamespace(pathWithNamespace: string): RepositoryBriefDto {
        this['path_with_namespace'] = pathWithNamespace;
        return this;
    }
    public set pathWithNamespace(pathWithNamespace: string  | undefined) {
        this['path_with_namespace'] = pathWithNamespace;
    }
    public get pathWithNamespace(): string | undefined {
        return this['path_with_namespace'];
    }
    public withProjectName(projectName: string): RepositoryBriefDto {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
}