import { ExportHandledVulnerabilitiesRequestBodySpecificVuls } from './ExportHandledVulnerabilitiesRequestBodySpecificVuls';


export class ExportHandledVulnerabilitiesRequestBody {
    private 'vul_name'?: string;
    private 'repair_priority'?: ExportHandledVulnerabilitiesRequestBodyRepairPriorityEnum | string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'is_affect_business'?: boolean;
    public status?: ExportHandledVulnerabilitiesRequestBodyStatusEnum | string;
    private 'asset_value'?: ExportHandledVulnerabilitiesRequestBodyAssetValueEnum | string;
    public label?: string;
    public type?: ExportHandledVulnerabilitiesRequestBodyTypeEnum | string;
    private 'group_name'?: string;
    private 'handle_cycle'?: ExportHandledVulnerabilitiesRequestBodyHandleCycleEnum | string;
    private 'specific_vuls'?: Array<ExportHandledVulnerabilitiesRequestBodySpecificVuls>;
    private 'export_size'?: number;
    private 'export_headers'?: Array<Array<string>>;
    public constructor(exportHeaders?: Array<Array<string>>) { 
        this['export_headers'] = exportHeaders;
    }
    public withVulName(vulName: string): ExportHandledVulnerabilitiesRequestBody {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withRepairPriority(repairPriority: ExportHandledVulnerabilitiesRequestBodyRepairPriorityEnum | string): ExportHandledVulnerabilitiesRequestBody {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: ExportHandledVulnerabilitiesRequestBodyRepairPriorityEnum | string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): ExportHandledVulnerabilitiesRequestBodyRepairPriorityEnum | string | undefined {
        return this['repair_priority'];
    }
    public withHostName(hostName: string): ExportHandledVulnerabilitiesRequestBody {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ExportHandledVulnerabilitiesRequestBody {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withIsAffectBusiness(isAffectBusiness: boolean): ExportHandledVulnerabilitiesRequestBody {
        this['is_affect_business'] = isAffectBusiness;
        return this;
    }
    public set isAffectBusiness(isAffectBusiness: boolean  | undefined) {
        this['is_affect_business'] = isAffectBusiness;
    }
    public get isAffectBusiness(): boolean | undefined {
        return this['is_affect_business'];
    }
    public withStatus(status: ExportHandledVulnerabilitiesRequestBodyStatusEnum | string): ExportHandledVulnerabilitiesRequestBody {
        this['status'] = status;
        return this;
    }
    public withAssetValue(assetValue: ExportHandledVulnerabilitiesRequestBodyAssetValueEnum | string): ExportHandledVulnerabilitiesRequestBody {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: ExportHandledVulnerabilitiesRequestBodyAssetValueEnum | string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): ExportHandledVulnerabilitiesRequestBodyAssetValueEnum | string | undefined {
        return this['asset_value'];
    }
    public withLabel(label: string): ExportHandledVulnerabilitiesRequestBody {
        this['label'] = label;
        return this;
    }
    public withType(type: ExportHandledVulnerabilitiesRequestBodyTypeEnum | string): ExportHandledVulnerabilitiesRequestBody {
        this['type'] = type;
        return this;
    }
    public withGroupName(groupName: string): ExportHandledVulnerabilitiesRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHandleCycle(handleCycle: ExportHandledVulnerabilitiesRequestBodyHandleCycleEnum | string): ExportHandledVulnerabilitiesRequestBody {
        this['handle_cycle'] = handleCycle;
        return this;
    }
    public set handleCycle(handleCycle: ExportHandledVulnerabilitiesRequestBodyHandleCycleEnum | string  | undefined) {
        this['handle_cycle'] = handleCycle;
    }
    public get handleCycle(): ExportHandledVulnerabilitiesRequestBodyHandleCycleEnum | string | undefined {
        return this['handle_cycle'];
    }
    public withSpecificVuls(specificVuls: Array<ExportHandledVulnerabilitiesRequestBodySpecificVuls>): ExportHandledVulnerabilitiesRequestBody {
        this['specific_vuls'] = specificVuls;
        return this;
    }
    public set specificVuls(specificVuls: Array<ExportHandledVulnerabilitiesRequestBodySpecificVuls>  | undefined) {
        this['specific_vuls'] = specificVuls;
    }
    public get specificVuls(): Array<ExportHandledVulnerabilitiesRequestBodySpecificVuls> | undefined {
        return this['specific_vuls'];
    }
    public withExportSize(exportSize: number): ExportHandledVulnerabilitiesRequestBody {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withExportHeaders(exportHeaders: Array<Array<string>>): ExportHandledVulnerabilitiesRequestBody {
        this['export_headers'] = exportHeaders;
        return this;
    }
    public set exportHeaders(exportHeaders: Array<Array<string>>  | undefined) {
        this['export_headers'] = exportHeaders;
    }
    public get exportHeaders(): Array<Array<string>> | undefined {
        return this['export_headers'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportHandledVulnerabilitiesRequestBodyRepairPriorityEnum {
    CRITICAL = 'Critical',
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportHandledVulnerabilitiesRequestBodyStatusEnum {
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
export enum ExportHandledVulnerabilitiesRequestBodyAssetValueEnum {
    IMPORTANT = 'important',
    COMMON = 'common',
    TEST = 'test'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportHandledVulnerabilitiesRequestBodyTypeEnum {
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
export enum ExportHandledVulnerabilitiesRequestBodyHandleCycleEnum {
    TODAY = 'today',
    ALL = 'all'
}
