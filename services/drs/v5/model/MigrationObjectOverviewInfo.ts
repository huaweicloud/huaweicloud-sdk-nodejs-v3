

export class MigrationObjectOverviewInfo {
    public type?: string;
    private 'src_count'?: string;
    private 'dst_count'?: string;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withType(type: string): MigrationObjectOverviewInfo {
        this['type'] = type;
        return this;
    }
    public withSrcCount(srcCount: string): MigrationObjectOverviewInfo {
        this['src_count'] = srcCount;
        return this;
    }
    public set srcCount(srcCount: string  | undefined) {
        this['src_count'] = srcCount;
    }
    public get srcCount(): string | undefined {
        return this['src_count'];
    }
    public withDstCount(dstCount: string): MigrationObjectOverviewInfo {
        this['dst_count'] = dstCount;
        return this;
    }
    public set dstCount(dstCount: string  | undefined) {
        this['dst_count'] = dstCount;
    }
    public get dstCount(): string | undefined {
        return this['dst_count'];
    }
    public withStatus(status: string): MigrationObjectOverviewInfo {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): MigrationObjectOverviewInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): MigrationObjectOverviewInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}