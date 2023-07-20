

export class NodeTypeDatastoresAttachments {
    private 'min_cn'?: string;
    private 'max_cn'?: string;
    public constructor(minCn?: string, maxCn?: string) { 
        this['min_cn'] = minCn;
        this['max_cn'] = maxCn;
    }
    public withMinCn(minCn: string): NodeTypeDatastoresAttachments {
        this['min_cn'] = minCn;
        return this;
    }
    public set minCn(minCn: string  | undefined) {
        this['min_cn'] = minCn;
    }
    public get minCn(): string | undefined {
        return this['min_cn'];
    }
    public withMaxCn(maxCn: string): NodeTypeDatastoresAttachments {
        this['max_cn'] = maxCn;
        return this;
    }
    public set maxCn(maxCn: string  | undefined) {
        this['max_cn'] = maxCn;
    }
    public get maxCn(): string | undefined {
        return this['max_cn'];
    }
}