

export class VulAffectedStatisticsResponseInfoCceDisabledVulList {
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'vul_name'?: string;
    private 'vul_id'?: string;
    private 'operation_description'?: string;
    public constructor() { 
    }
    public withHostName(hostName: string): VulAffectedStatisticsResponseInfoCceDisabledVulList {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): VulAffectedStatisticsResponseInfoCceDisabledVulList {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withVulName(vulName: string): VulAffectedStatisticsResponseInfoCceDisabledVulList {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulId(vulId: string): VulAffectedStatisticsResponseInfoCceDisabledVulList {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withOperationDescription(operationDescription: string): VulAffectedStatisticsResponseInfoCceDisabledVulList {
        this['operation_description'] = operationDescription;
        return this;
    }
    public set operationDescription(operationDescription: string  | undefined) {
        this['operation_description'] = operationDescription;
    }
    public get operationDescription(): string | undefined {
        return this['operation_description'];
    }
}