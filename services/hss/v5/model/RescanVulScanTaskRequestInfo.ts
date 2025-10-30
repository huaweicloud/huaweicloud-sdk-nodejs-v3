

export class RescanVulScanTaskRequestInfo {
    private 'range_type'?: string;
    private 'host_ids'?: Array<string>;
    public constructor(rangeType?: string) { 
        this['range_type'] = rangeType;
    }
    public withRangeType(rangeType: string): RescanVulScanTaskRequestInfo {
        this['range_type'] = rangeType;
        return this;
    }
    public set rangeType(rangeType: string  | undefined) {
        this['range_type'] = rangeType;
    }
    public get rangeType(): string | undefined {
        return this['range_type'];
    }
    public withHostIds(hostIds: Array<string>): RescanVulScanTaskRequestInfo {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
}