

export class NodeMessage {
    public role?: string;
    public content?: string;
    public origin?: string;
    public nodeId?: string;
    public nodeType?: string;
    public nodeName?: string;
    public createdTime?: number;
    public constructor() { 
    }
    public withRole(role: string): NodeMessage {
        this['role'] = role;
        return this;
    }
    public withContent(content: string): NodeMessage {
        this['content'] = content;
        return this;
    }
    public withOrigin(origin: string): NodeMessage {
        this['origin'] = origin;
        return this;
    }
    public withNodeId(nodeId: string): NodeMessage {
        this['nodeId'] = nodeId;
        return this;
    }
    public withNodeType(nodeType: string): NodeMessage {
        this['nodeType'] = nodeType;
        return this;
    }
    public withNodeName(nodeName: string): NodeMessage {
        this['nodeName'] = nodeName;
        return this;
    }
    public withCreatedTime(createdTime: number): NodeMessage {
        this['createdTime'] = createdTime;
        return this;
    }
}