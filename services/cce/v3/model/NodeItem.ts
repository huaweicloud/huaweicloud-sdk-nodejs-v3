

export class NodeItem {
    public uid: string;
    public constructor(uid?: any) { 
        this['uid'] = uid;
    }
    public withUid(uid: string): NodeItem {
        this['uid'] = uid;
        return this;
    }
}