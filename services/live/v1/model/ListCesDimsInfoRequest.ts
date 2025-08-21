

export class ListCesDimsInfoRequest {
    public namespace?: string;
    public constructor(namespace?: string) { 
        this['namespace'] = namespace;
    }
    public withNamespace(namespace: string): ListCesDimsInfoRequest {
        this['namespace'] = namespace;
        return this;
    }
}