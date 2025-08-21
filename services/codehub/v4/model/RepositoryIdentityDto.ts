

export class RepositoryIdentityDto {
    public id?: number;
    private 'path_with_namespace'?: string;
    public constructor() { 
    }
    public withId(id: number): RepositoryIdentityDto {
        this['id'] = id;
        return this;
    }
    public withPathWithNamespace(pathWithNamespace: string): RepositoryIdentityDto {
        this['path_with_namespace'] = pathWithNamespace;
        return this;
    }
    public set pathWithNamespace(pathWithNamespace: string  | undefined) {
        this['path_with_namespace'] = pathWithNamespace;
    }
    public get pathWithNamespace(): string | undefined {
        return this['path_with_namespace'];
    }
}