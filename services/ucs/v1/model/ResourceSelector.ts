

export class ResourceSelector {
    public apiVersion?: string;
    public kind?: string;
    public namespace?: string;
    public name?: string;
    public constructor() { 
    }
    public withApiVersion(apiVersion: string): ResourceSelector {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ResourceSelector {
        this['kind'] = kind;
        return this;
    }
    public withNamespace(namespace: string): ResourceSelector {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ResourceSelector {
        this['name'] = name;
        return this;
    }
}