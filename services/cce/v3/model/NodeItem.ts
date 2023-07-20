

export class NodeItem {
    public uid?: string;
    public constructor(uid?: string) { 
        this['uid'] = uid;
    }
    public withUid(uid: string): NodeItem {
        this['uid'] = uid;
        return this;
    }
}