

export class ManualVulScanRequestInfo {
    private 'manual_scan_type'?: Array<ManualVulScanRequestInfoManualScanTypeEnum> | Array<string>;
    private 'batch_flag'?: boolean;
    private 'range_type'?: string;
    private 'agent_id_list'?: Array<string>;
    private 'urgent_vul_id_list'?: Array<string>;
    public constructor() { 
    }
    public withManualScanType(manualScanType: Array<ManualVulScanRequestInfoManualScanTypeEnum> | Array<string>): ManualVulScanRequestInfo {
        this['manual_scan_type'] = manualScanType;
        return this;
    }
    public set manualScanType(manualScanType: Array<ManualVulScanRequestInfoManualScanTypeEnum> | Array<string>  | undefined) {
        this['manual_scan_type'] = manualScanType;
    }
    public get manualScanType(): Array<ManualVulScanRequestInfoManualScanTypeEnum> | Array<string> | undefined {
        return this['manual_scan_type'];
    }
    public withBatchFlag(batchFlag: boolean): ManualVulScanRequestInfo {
        this['batch_flag'] = batchFlag;
        return this;
    }
    public set batchFlag(batchFlag: boolean  | undefined) {
        this['batch_flag'] = batchFlag;
    }
    public get batchFlag(): boolean | undefined {
        return this['batch_flag'];
    }
    public withRangeType(rangeType: string): ManualVulScanRequestInfo {
        this['range_type'] = rangeType;
        return this;
    }
    public set rangeType(rangeType: string  | undefined) {
        this['range_type'] = rangeType;
    }
    public get rangeType(): string | undefined {
        return this['range_type'];
    }
    public withAgentIdList(agentIdList: Array<string>): ManualVulScanRequestInfo {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
    public withUrgentVulIdList(urgentVulIdList: Array<string>): ManualVulScanRequestInfo {
        this['urgent_vul_id_list'] = urgentVulIdList;
        return this;
    }
    public set urgentVulIdList(urgentVulIdList: Array<string>  | undefined) {
        this['urgent_vul_id_list'] = urgentVulIdList;
    }
    public get urgentVulIdList(): Array<string> | undefined {
        return this['urgent_vul_id_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ManualVulScanRequestInfoManualScanTypeEnum {
    LINUX_VUL = 'linux_vul',
    WINDOWS_VUL = 'windows_vul',
    WEB_CMS = 'web_cms',
    APP_VUL = 'app_vul',
    URGENT_VUL = 'urgent_vul'
}
