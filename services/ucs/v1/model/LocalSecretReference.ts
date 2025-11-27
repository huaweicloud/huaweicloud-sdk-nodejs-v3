

export class LocalSecretReference {
    public namespace?: string;
    public name?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): LocalSecretReference {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): LocalSecretReference {
        this['name'] = name;
        return this;
    }
}