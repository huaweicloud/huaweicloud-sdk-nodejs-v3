

export class QuerySupportNodeTypeBean {
    private 'node_type'?: string;
    private 'is_sellout'?: boolean;
    public constructor() { 
    }
    public withNodeType(nodeType: string): QuerySupportNodeTypeBean {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withIsSellout(isSellout: boolean): QuerySupportNodeTypeBean {
        this['is_sellout'] = isSellout;
        return this;
    }
    public set isSellout(isSellout: boolean  | undefined) {
        this['is_sellout'] = isSellout;
    }
    public get isSellout(): boolean | undefined {
        return this['is_sellout'];
    }
}