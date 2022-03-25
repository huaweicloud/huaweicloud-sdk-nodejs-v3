

export class CreateNamespaceRequestBody {
    public namespace: string;
    public constructor(namespace?: any) { 
        this['namespace'] = namespace;
    }
    public withNamespace(namespace: string): CreateNamespaceRequestBody {
        this['namespace'] = namespace;
        return this;
    }
}