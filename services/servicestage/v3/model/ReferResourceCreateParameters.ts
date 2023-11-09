

export class ReferResourceCreateParameters {
    public namespace?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): ReferResourceCreateParameters {
        this['namespace'] = namespace;
        return this;
    }
}