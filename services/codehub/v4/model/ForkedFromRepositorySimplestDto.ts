

export class ForkedFromRepositorySimplestDto {
    private 'name_with_namespace'?: string;
    private 'path_with_namespace'?: string;
    public name?: string;
    public namespace?: string;
    public id?: number;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public constructor() { 
    }
    public withNameWithNamespace(nameWithNamespace: string): ForkedFromRepositorySimplestDto {
        this['name_with_namespace'] = nameWithNamespace;
        return this;
    }
    public set nameWithNamespace(nameWithNamespace: string  | undefined) {
        this['name_with_namespace'] = nameWithNamespace;
    }
    public get nameWithNamespace(): string | undefined {
        return this['name_with_namespace'];
    }
    public withPathWithNamespace(pathWithNamespace: string): ForkedFromRepositorySimplestDto {
        this['path_with_namespace'] = pathWithNamespace;
        return this;
    }
    public set pathWithNamespace(pathWithNamespace: string  | undefined) {
        this['path_with_namespace'] = pathWithNamespace;
    }
    public get pathWithNamespace(): string | undefined {
        return this['path_with_namespace'];
    }
    public withName(name: string): ForkedFromRepositorySimplestDto {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ForkedFromRepositorySimplestDto {
        this['namespace'] = namespace;
        return this;
    }
    public withId(id: number): ForkedFromRepositorySimplestDto {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ForkedFromRepositorySimplestDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ForkedFromRepositorySimplestDto {
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