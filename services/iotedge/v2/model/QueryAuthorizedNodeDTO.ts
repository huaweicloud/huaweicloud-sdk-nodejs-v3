

export class QueryAuthorizedNodeDTO {
    private 'node_id'?: string;
    private 'authorized_time'?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: string): QueryAuthorizedNodeDTO {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withAuthorizedTime(authorizedTime: string): QueryAuthorizedNodeDTO {
        this['authorized_time'] = authorizedTime;
        return this;
    }
    public set authorizedTime(authorizedTime: string  | undefined) {
        this['authorized_time'] = authorizedTime;
    }
    public get authorizedTime(): string | undefined {
        return this['authorized_time'];
    }
}