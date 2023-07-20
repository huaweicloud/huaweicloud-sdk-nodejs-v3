

export class FlowCompareData {
    private 'src_db'?: string;
    private 'src_tb'?: string;
    private 'dst_db'?: string;
    private 'dst_tb'?: string;
    public progress?: number;
    public constructor() { 
    }
    public withSrcDb(srcDb: string): FlowCompareData {
        this['src_db'] = srcDb;
        return this;
    }
    public set srcDb(srcDb: string  | undefined) {
        this['src_db'] = srcDb;
    }
    public get srcDb(): string | undefined {
        return this['src_db'];
    }
    public withSrcTb(srcTb: string): FlowCompareData {
        this['src_tb'] = srcTb;
        return this;
    }
    public set srcTb(srcTb: string  | undefined) {
        this['src_tb'] = srcTb;
    }
    public get srcTb(): string | undefined {
        return this['src_tb'];
    }
    public withDstDb(dstDb: string): FlowCompareData {
        this['dst_db'] = dstDb;
        return this;
    }
    public set dstDb(dstDb: string  | undefined) {
        this['dst_db'] = dstDb;
    }
    public get dstDb(): string | undefined {
        return this['dst_db'];
    }
    public withDstTb(dstTb: string): FlowCompareData {
        this['dst_tb'] = dstTb;
        return this;
    }
    public set dstTb(dstTb: string  | undefined) {
        this['dst_tb'] = dstTb;
    }
    public get dstTb(): string | undefined {
        return this['dst_tb'];
    }
    public withProgress(progress: number): FlowCompareData {
        this['progress'] = progress;
        return this;
    }
}