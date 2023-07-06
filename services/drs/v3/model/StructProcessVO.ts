

export class StructProcessVO {
    public type: string;
    public status: number;
    private 'src_count': number | undefined;
    private 'dst_count': number | undefined;
    private 'start_time': number | undefined;
    private 'end_time'?: number | undefined;
    public constructor(type?: any, status?: any, srcCount?: any, dstCount?: any, startTime?: any) { 
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
    public set srcCount(srcCount: number | undefined) {
        this['src_count'] = srcCount;
    }
    public get srcCount() {
        return this['src_count'];
    }
    public withDstCount(dstCount: number): StructProcessVO {
        this['dst_count'] = dstCount;
        return this;
    }
    public set dstCount(dstCount: number | undefined) {
        this['dst_count'] = dstCount;
    }
    public get dstCount() {
        return this['dst_count'];
    }
    public withStartTime(startTime: number): StructProcessVO {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): StructProcessVO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}