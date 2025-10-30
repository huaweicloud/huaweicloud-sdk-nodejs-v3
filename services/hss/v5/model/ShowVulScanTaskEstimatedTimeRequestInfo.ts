

export class ShowVulScanTaskEstimatedTimeRequestInfo {
    private 'manual_scan_type'?: Array<string>;
    private 'range_type'?: string;
    private 'agent_ids'?: Array<string>;
    public constructor() { 
    }
    public withManualScanType(manualScanType: Array<string>): ShowVulScanTaskEstimatedTimeRequestInfo {
        this['manual_scan_type'] = manualScanType;
        return this;
    }
    public set manualScanType(manualScanType: Array<string>  | undefined) {
        this['manual_scan_type'] = manualScanType;
    }
    public get manualScanType(): Array<string> | undefined {
        return this['manual_scan_type'];
    }
    public withRangeType(rangeType: string): ShowVulScanTaskEstimatedTimeRequestInfo {
        this['range_type'] = rangeType;
        return this;
    }
    public set rangeType(rangeType: string  | undefined) {
        this['range_type'] = rangeType;
    }
    public get rangeType(): string | undefined {
        return this['range_type'];
    }
    public withAgentIds(agentIds: Array<string>): ShowVulScanTaskEstimatedTimeRequestInfo {
        this['agent_ids'] = agentIds;
        return this;
    }
    public set agentIds(agentIds: Array<string>  | undefined) {
        this['agent_ids'] = agentIds;
    }
    public get agentIds(): Array<string> | undefined {
        return this['agent_ids'];
    }
}