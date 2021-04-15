

export class NodePoolMetadata {
    public name: string;
    public uid?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): NodePoolMetadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): NodePoolMetadata {
        this['uid'] = uid;
        return this;
    }
}