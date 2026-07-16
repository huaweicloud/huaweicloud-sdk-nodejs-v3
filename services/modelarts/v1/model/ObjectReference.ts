

export class ObjectReference {
    public kind?: string;
    public apiVersion?: string;
    public namespace?: string;
    public name?: string;
    public uid?: string;
    public resourceVersion?: string;
    public constructor() { 
    }
    public withKind(kind: string): ObjectReference {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ObjectReference {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withNamespace(namespace: string): ObjectReference {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ObjectReference {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): ObjectReference {
        this['uid'] = uid;
        return this;
    }
    public withResourceVersion(resourceVersion: string): ObjectReference {
        this['resourceVersion'] = resourceVersion;
        return this;
    }
}