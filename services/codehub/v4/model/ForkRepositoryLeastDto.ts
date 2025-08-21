

export class ForkRepositoryLeastDto {
    private 'path_with_namespace'?: string;
    public constructor() { 
    }
    public withPathWithNamespace(pathWithNamespace: string): ForkRepositoryLeastDto {
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