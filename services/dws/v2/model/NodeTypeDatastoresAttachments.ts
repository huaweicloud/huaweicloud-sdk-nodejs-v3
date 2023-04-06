

export class NodeTypeDatastoresAttachments {
    private 'min_cn': string | undefined;
    private 'max_cn': string | undefined;
    public constructor(minCn?: any, maxCn?: any) { 
        this['min_cn'] = minCn;
        this['max_cn'] = maxCn;
    }
    public withMinCn(minCn: string): NodeTypeDatastoresAttachments {
        this['min_cn'] = minCn;
        return this;
    }
    public set minCn(minCn: string | undefined) {
        this['min_cn'] = minCn;
    }
    public get minCn() {
        return this['min_cn'];
    }
    public withMaxCn(maxCn: string): NodeTypeDatastoresAttachments {
        this['max_cn'] = maxCn;
        return this;
    }
    public set maxCn(maxCn: string | undefined) {
        this['max_cn'] = maxCn;
    }
    public get maxCn() {
        return this['max_cn'];
    }
}