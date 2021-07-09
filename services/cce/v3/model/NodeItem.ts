

export class NodeItem {
    public uid?: string;
    public constructor() { 
    }
    public withUid(uid: string): NodeItem {
        this['uid'] = uid;
        return this;
    }
}