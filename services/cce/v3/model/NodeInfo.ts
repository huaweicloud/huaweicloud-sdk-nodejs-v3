

export class NodeInfo {
    public uid?: string;
    public name?: string;
    public status?: string;
    public nodeType?: string;
    public constructor() { 
    }
    public withUid(uid: string): NodeInfo {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): NodeInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): NodeInfo {
        this['status'] = status;
        return this;
    }
    public withNodeType(nodeType: string): NodeInfo {
        this['nodeType'] = nodeType;
        return this;
    }
}