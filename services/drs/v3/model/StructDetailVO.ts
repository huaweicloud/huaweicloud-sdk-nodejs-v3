

export class StructDetailVO {
    public progress?: number;
    private 'src_DB'?: string;
    private 'src_TB'?: string;
    private 'dst_DB'?: string;
    private 'dst_TB'?: string;
    public constructor() { 
    }
    public withProgress(progress: number): StructDetailVO {
        this['progress'] = progress;
        return this;
    }
    public withSrcDB(srcDB: string): StructDetailVO {
        this['src_DB'] = srcDB;
        return this;
    }
    public set srcDB(srcDB: string  | undefined) {
        this['src_DB'] = srcDB;
    }
    public get srcDB(): string | undefined {
        return this['src_DB'];
    }
    public withSrcTB(srcTB: string): StructDetailVO {
        this['src_TB'] = srcTB;
        return this;
    }
    public set srcTB(srcTB: string  | undefined) {
        this['src_TB'] = srcTB;
    }
    public get srcTB(): string | undefined {
        return this['src_TB'];
    }
    public withDstDB(dstDB: string): StructDetailVO {
        this['dst_DB'] = dstDB;
        return this;
    }
    public set dstDB(dstDB: string  | undefined) {
        this['dst_DB'] = dstDB;
    }
    public get dstDB(): string | undefined {
        return this['dst_DB'];
    }
    public withDstTB(dstTB: string): StructDetailVO {
        this['dst_TB'] = dstTB;
        return this;
    }
    public set dstTB(dstTB: string  | undefined) {
        this['dst_TB'] = dstTB;
    }
    public get dstTB(): string | undefined {
        return this['dst_TB'];
    }
}