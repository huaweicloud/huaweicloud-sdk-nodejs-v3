

export class ExportVulHandleHistoryRequestBody {
    public status?: ExportVulHandleHistoryRequestBodyStatusEnum | string;
    private 'vul_id'?: string;
    private 'vul_type'?: ExportVulHandleHistoryRequestBodyVulTypeEnum | string;
    private 'asset_value'?: ExportVulHandleHistoryRequestBodyAssetValueEnum | string;
    private 'group_name'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'export_size'?: number;
    private 'export_header_list'?: Array<Array<string>>;
    public constructor(exportHeaderList?: Array<Array<string>>) { 
        this['export_header_list'] = exportHeaderList;
    }
    public withStatus(status: ExportVulHandleHistoryRequestBodyStatusEnum | string): ExportVulHandleHistoryRequestBody {
        this['status'] = status;
        return this;
    }
    public withVulId(vulId: string): ExportVulHandleHistoryRequestBody {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulType(vulType: ExportVulHandleHistoryRequestBodyVulTypeEnum | string): ExportVulHandleHistoryRequestBody {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: ExportVulHandleHistoryRequestBodyVulTypeEnum | string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): ExportVulHandleHistoryRequestBodyVulTypeEnum | string | undefined {
        return this['vul_type'];
    }
    public withAssetValue(assetValue: ExportVulHandleHistoryRequestBodyAssetValueEnum | string): ExportVulHandleHistoryRequestBody {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: ExportVulHandleHistoryRequestBodyAssetValueEnum | string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): ExportVulHandleHistoryRequestBodyAssetValueEnum | string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ExportVulHandleHistoryRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHostName(hostName: string): ExportVulHandleHistoryRequestBody {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ExportVulHandleHistoryRequestBody {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withExportSize(exportSize: number): ExportVulHandleHistoryRequestBody {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withExportHeaderList(exportHeaderList: Array<Array<string>>): ExportVulHandleHistoryRequestBody {
        this['export_header_list'] = exportHeaderList;
        return this;
    }
    public set exportHeaderList(exportHeaderList: Array<Array<string>>  | undefined) {
        this['export_header_list'] = exportHeaderList;
    }
    public get exportHeaderList(): Array<Array<string>> | undefined {
        return this['export_header_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportVulHandleHistoryRequestBodyStatusEnum {
    VUL_STATUS_UNFIX = 'vul_status_unfix',
    VUL_STATUS_IGNORED = 'vul_status_ignored',
    VUL_STATUS_VERIFIED = 'vul_status_verified',
    VUL_STATUS_FIXING = 'vul_status_fixing',
    VUL_STATUS_FIXED = 'vul_status_fixed',
    VUL_STATUS_REBOOT = 'vul_status_reboot',
    VUL_STATUS_FAILED = 'vul_status_failed',
    VUL_STATUS_FIX_AFTER_REBOOT = 'vul_status_fix_after_reboot'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportVulHandleHistoryRequestBodyVulTypeEnum {
    LINUX_VUL = 'linux_vul',
    WINDOWS_VUL = 'windows_vul',
    WEB_CMS = 'web_cms',
    APP_VUL = 'app_vul',
    URGENT_VUL = 'urgent_vul'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportVulHandleHistoryRequestBodyAssetValueEnum {
    IMPORTANT = 'important',
    COMMON = 'common',
    TEST = 'test'
}
