

export class OwnerReference {
    public apiVersion?: string;
    public kind?: string;
    public name?: string;
    public uid?: string;
    public controller?: boolean;
    public blockOwnerDeletion?: boolean;
    public constructor() { 
    }
    public withApiVersion(apiVersion: string): OwnerReference {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): OwnerReference {
        this['kind'] = kind;
        return this;
    }
    public withName(name: string): OwnerReference {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): OwnerReference {
        this['uid'] = uid;
        return this;
    }
    public withController(controller: boolean): OwnerReference {
        this['controller'] = controller;
        return this;
    }
    public withBlockOwnerDeletion(blockOwnerDeletion: boolean): OwnerReference {
        this['blockOwnerDeletion'] = blockOwnerDeletion;
        return this;
    }
}