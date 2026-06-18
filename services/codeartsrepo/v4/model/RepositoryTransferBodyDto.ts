

export class RepositoryTransferBodyDto {
    public namespace?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): RepositoryTransferBodyDto {
        this['namespace'] = namespace;
        return this;
    }
}