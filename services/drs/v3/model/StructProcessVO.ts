

export class StructProcessVO {
    public type?: string;
    public status?: number;
    private 'src_count'?: number;
    private 'dst_count'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(type?: string, status?: number, srcCount?: number, dstCount?: number, startTime?: number) { 
        this['type'] = type;
        this['status'] = status;
        this['src_count'] = srcCount;
        this['dst_count'] = dstCount;
        this['start_time'] = startTime;
    }
    public withType(type: string): StructProcessVO {
        this['type'] = type;
        return this;
    }
    public withStatus(status: number): StructProcessVO {
        this['status'] = status;
        return this;
    }
    public withSrcCount(srcCount: number): StructProcessVO {
        this['src_count'] = srcCount;
        return this;
    }
    public set srcCount(srcCount: number  | undefined) {
        this['src_count'] = srcCount;
    }
    public get srcCount(): number | undefined {
        return this['src_count'];
    }
    public withDstCount(dstCount: number): StructProcessVO {
        this['dst_count'] = dstCount;
        return this;
    }
    public set dstCount(dstCount: number  | undefined) {
        this['dst_count'] = dstCount;
    }
    public get dstCount(): number | undefined {
        return this['dst_count'];
    }
    public withStartTime(startTime: number): StructProcessVO {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): StructProcessVO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}