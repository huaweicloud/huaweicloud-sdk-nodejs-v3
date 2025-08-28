

export class ListHandleVulsRequest {
    public limit?: number;
    public offset?: number;
    private 'vul_name'?: string;
    private 'cve_id'?: string;
    private 'label_list'?: string;
    public status?: string;
    private 'asset_value'?: string;
    private 'group_name'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public type?: string;
    private 'handle_circle'?: string;
    private 'repair_priority'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListHandleVulsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHandleVulsRequest {
        this['offset'] = offset;
        return this;
    }
    public withVulName(vulName: string): ListHandleVulsRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withCveId(cveId: string): ListHandleVulsRequest {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withLabelList(labelList: string): ListHandleVulsRequest {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: string  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): string | undefined {
        return this['label_list'];
    }
    public withStatus(status: string): ListHandleVulsRequest {
        this['status'] = status;
        return this;
    }
    public withAssetValue(assetValue: string): ListHandleVulsRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ListHandleVulsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHostName(hostName: string): ListHandleVulsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListHandleVulsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withType(type: string): ListHandleVulsRequest {
        this['type'] = type;
        return this;
    }
    public withHandleCircle(handleCircle: string): ListHandleVulsRequest {
        this['handle_circle'] = handleCircle;
        return this;
    }
    public set handleCircle(handleCircle: string  | undefined) {
        this['handle_circle'] = handleCircle;
    }
    public get handleCircle(): string | undefined {
        return this['handle_circle'];
    }
    public withRepairPriority(repairPriority: string): ListHandleVulsRequest {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
}