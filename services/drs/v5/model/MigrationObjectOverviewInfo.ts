

export class MigrationObjectOverviewInfo {
    public type?: string;
    private 'src_count'?: string | undefined;
    private 'dst_count'?: string | undefined;
    public status?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
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
    public set srcCount(srcCount: string | undefined) {
        this['src_count'] = srcCount;
    }
    public get srcCount() {
        return this['src_count'];
    }
    public withDstCount(dstCount: string): MigrationObjectOverviewInfo {
        this['dst_count'] = dstCount;
        return this;
    }
    public set dstCount(dstCount: string | undefined) {
        this['dst_count'] = dstCount;
    }
    public get dstCount() {
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
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): MigrationObjectOverviewInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}