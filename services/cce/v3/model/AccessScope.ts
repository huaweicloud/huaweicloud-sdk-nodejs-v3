

export class AccessScope {
    public namespaces?: Array<string>;
    public constructor(namespaces?: Array<string>) { 
        this['namespaces'] = namespaces;
    }
    public withNamespaces(namespaces: Array<string>): AccessScope {
        this['namespaces'] = namespaces;
        return this;
    }
}