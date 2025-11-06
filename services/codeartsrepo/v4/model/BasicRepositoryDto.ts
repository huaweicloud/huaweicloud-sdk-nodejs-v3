

export class BasicRepositoryDto {
    public id?: number;
    public name?: string;
    public namespace?: string;
    public path?: string;
    private 'develop_mode'?: string;
    public visibility?: string;
    public security?: string;
    private 'name_with_namespace'?: string;
    public archived?: boolean;
    public status?: string;
    public constructor() { 
    }
    public withId(id: number): BasicRepositoryDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BasicRepositoryDto {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): BasicRepositoryDto {
        this['namespace'] = namespace;
        return this;
    }
    public withPath(path: string): BasicRepositoryDto {
        this['path'] = path;
        return this;
    }
    public withDevelopMode(developMode: string): BasicRepositoryDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): string | undefined {
        return this['develop_mode'];
    }
    public withVisibility(visibility: string): BasicRepositoryDto {
        this['visibility'] = visibility;
        return this;
    }
    public withSecurity(security: string): BasicRepositoryDto {
        this['security'] = security;
        return this;
    }
    public withNameWithNamespace(nameWithNamespace: string): BasicRepositoryDto {
        this['name_with_namespace'] = nameWithNamespace;
        return this;
    }
    public set nameWithNamespace(nameWithNamespace: string  | undefined) {
        this['name_with_namespace'] = nameWithNamespace;
    }
    public get nameWithNamespace(): string | undefined {
        return this['name_with_namespace'];
    }
    public withArchived(archived: boolean): BasicRepositoryDto {
        this['archived'] = archived;
        return this;
    }
    public withStatus(status: string): BasicRepositoryDto {
        this['status'] = status;
        return this;
    }
}