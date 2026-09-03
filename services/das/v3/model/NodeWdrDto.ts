

export class NodeWdrDto {
    private 'node_wdr'?: string;
    private 'node_name'?: string;
    public constructor() { 
    }
    public withNodeWdr(nodeWdr: string): NodeWdrDto {
        this['node_wdr'] = nodeWdr;
        return this;
    }
    public set nodeWdr(nodeWdr: string  | undefined) {
        this['node_wdr'] = nodeWdr;
    }
    public get nodeWdr(): string | undefined {
        return this['node_wdr'];
    }
    public withNodeName(nodeName: string): NodeWdrDto {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
}