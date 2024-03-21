import { HostVulInfoAppList } from './HostVulInfoAppList';
import { HostVulInfoCveList } from './HostVulInfoCveList';
import { VulHostInfoDisabledOperateTypes } from './VulHostInfoDisabledOperateTypes';


export class HostVulInfo {
    private 'vul_name'?: string;
    private 'vul_id'?: string;
    private 'label_list'?: Array<string>;
    private 'repair_necessity'?: string;
    private 'scan_time'?: number;
    public type?: string;
    private 'app_list'?: Array<HostVulInfoAppList>;
    private 'severity_level'?: string;
    private 'solution_detail'?: string;
    public url?: string;
    public description?: string;
    private 'repair_cmd'?: string;
    public status?: string;
    private 'repair_success_num'?: number;
    private 'cve_list'?: Array<HostVulInfoCveList>;
    private 'is_affect_business'?: boolean;
    private 'first_scan_time'?: number;
    private 'app_name'?: string;
    private 'app_version'?: string;
    private 'app_path'?: string;
    public version?: string;
    private 'support_restore'?: boolean;
    private 'disabled_operate_types'?: Array<VulHostInfoDisabledOperateTypes>;
    private 'repair_priority'?: string;
    public constructor() { 
    }
    public withVulName(vulName: string): HostVulInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulId(vulId: string): HostVulInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withLabelList(labelList: Array<string>): HostVulInfo {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<string>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<string> | undefined {
        return this['label_list'];
    }
    public withRepairNecessity(repairNecessity: string): HostVulInfo {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withScanTime(scanTime: number): HostVulInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withType(type: string): HostVulInfo {
        this['type'] = type;
        return this;
    }
    public withAppList(appList: Array<HostVulInfoAppList>): HostVulInfo {
        this['app_list'] = appList;
        return this;
    }
    public set appList(appList: Array<HostVulInfoAppList>  | undefined) {
        this['app_list'] = appList;
    }
    public get appList(): Array<HostVulInfoAppList> | undefined {
        return this['app_list'];
    }
    public withSeverityLevel(severityLevel: string): HostVulInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withSolutionDetail(solutionDetail: string): HostVulInfo {
        this['solution_detail'] = solutionDetail;
        return this;
    }
    public set solutionDetail(solutionDetail: string  | undefined) {
        this['solution_detail'] = solutionDetail;
    }
    public get solutionDetail(): string | undefined {
        return this['solution_detail'];
    }
    public withUrl(url: string): HostVulInfo {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): HostVulInfo {
        this['description'] = description;
        return this;
    }
    public withRepairCmd(repairCmd: string): HostVulInfo {
        this['repair_cmd'] = repairCmd;
        return this;
    }
    public set repairCmd(repairCmd: string  | undefined) {
        this['repair_cmd'] = repairCmd;
    }
    public get repairCmd(): string | undefined {
        return this['repair_cmd'];
    }
    public withStatus(status: string): HostVulInfo {
        this['status'] = status;
        return this;
    }
    public withRepairSuccessNum(repairSuccessNum: number): HostVulInfo {
        this['repair_success_num'] = repairSuccessNum;
        return this;
    }
    public set repairSuccessNum(repairSuccessNum: number  | undefined) {
        this['repair_success_num'] = repairSuccessNum;
    }
    public get repairSuccessNum(): number | undefined {
        return this['repair_success_num'];
    }
    public withCveList(cveList: Array<HostVulInfoCveList>): HostVulInfo {
        this['cve_list'] = cveList;
        return this;
    }
    public set cveList(cveList: Array<HostVulInfoCveList>  | undefined) {
        this['cve_list'] = cveList;
    }
    public get cveList(): Array<HostVulInfoCveList> | undefined {
        return this['cve_list'];
    }
    public withIsAffectBusiness(isAffectBusiness: boolean): HostVulInfo {
        this['is_affect_business'] = isAffectBusiness;
        return this;
    }
    public set isAffectBusiness(isAffectBusiness: boolean  | undefined) {
        this['is_affect_business'] = isAffectBusiness;
    }
    public get isAffectBusiness(): boolean | undefined {
        return this['is_affect_business'];
    }
    public withFirstScanTime(firstScanTime: number): HostVulInfo {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withAppName(appName: string): HostVulInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppVersion(appVersion: string): HostVulInfo {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withAppPath(appPath: string): HostVulInfo {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
    public withVersion(version: string): HostVulInfo {
        this['version'] = version;
        return this;
    }
    public withSupportRestore(supportRestore: boolean): HostVulInfo {
        this['support_restore'] = supportRestore;
        return this;
    }
    public set supportRestore(supportRestore: boolean  | undefined) {
        this['support_restore'] = supportRestore;
    }
    public get supportRestore(): boolean | undefined {
        return this['support_restore'];
    }
    public withDisabledOperateTypes(disabledOperateTypes: Array<VulHostInfoDisabledOperateTypes>): HostVulInfo {
        this['disabled_operate_types'] = disabledOperateTypes;
        return this;
    }
    public set disabledOperateTypes(disabledOperateTypes: Array<VulHostInfoDisabledOperateTypes>  | undefined) {
        this['disabled_operate_types'] = disabledOperateTypes;
    }
    public get disabledOperateTypes(): Array<VulHostInfoDisabledOperateTypes> | undefined {
        return this['disabled_operate_types'];
    }
    public withRepairPriority(repairPriority: string): HostVulInfo {
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