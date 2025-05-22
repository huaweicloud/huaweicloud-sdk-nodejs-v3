

export class NodeTypeDatastoresAttachments {
    private 'min_cn'?: number;
    private 'max_cn'?: number;
    public constructor() { 
    }
    public withMinCn(minCn: number): NodeTypeDatastoresAttachments {
        this['min_cn'] = minCn;
        return this;
    }
    public set minCn(minCn: number  | undefined) {
        this['min_cn'] = minCn;
    }
    public get minCn(): number | undefined {
        return this['min_cn'];
    }
    public withMaxCn(maxCn: number): NodeTypeDatastoresAttachments {
        this['max_cn'] = maxCn;
        return this;
    }
    public set maxCn(maxCn: number  | undefined) {
        this['max_cn'] = maxCn;
    }
    public get maxCn(): number | undefined {
        return this['max_cn'];
    }
}