import { RepairPriorityListInfo } from './RepairPriorityListInfo';
import { VulInfoCveList } from './VulInfoCveList';
import { VulnerabilityHostNumberInfo } from './VulnerabilityHostNumberInfo';


export class VulInfo {
    private 'vul_name'?: string;
    private 'vul_id'?: string;
    private 'label_list'?: Array<string>;
    private 'repair_necessity'?: string;
    private 'severity_level'?: string;
    private 'host_num'?: number;
    private 'unhandle_host_num'?: number;
    private 'scan_time'?: number;
    private 'solution_detail'?: string;
    public url?: string;
    public description?: string;
    public type?: string;
    private 'host_id_list'?: Array<string>;
    private 'cve_list'?: Array<VulInfoCveList>;
    private 'patch_url'?: string;
    private 'repair_priority'?: string;
    private 'hosts_num'?: VulnerabilityHostNumberInfo;
    private 'repair_success_num'?: number;
    private 'fixed_num'?: number;
    private 'ignored_num'?: number;
    private 'verify_num'?: number;
    private 'repair_priority_list'?: Array<RepairPriorityListInfo>;
    public constructor() { 
    }
    public withVulName(vulName: string): VulInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulId(vulId: string): VulInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withLabelList(labelList: Array<string>): VulInfo {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<string>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<string> | undefined {
        return this['label_list'];
    }
    public withRepairNecessity(repairNecessity: string): VulInfo {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withSeverityLevel(severityLevel: string): VulInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withHostNum(hostNum: number): VulInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withUnhandleHostNum(unhandleHostNum: number): VulInfo {
        this['unhandle_host_num'] = unhandleHostNum;
        return this;
    }
    public set unhandleHostNum(unhandleHostNum: number  | undefined) {
        this['unhandle_host_num'] = unhandleHostNum;
    }
    public get unhandleHostNum(): number | undefined {
        return this['unhandle_host_num'];
    }
    public withScanTime(scanTime: number): VulInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withSolutionDetail(solutionDetail: string): VulInfo {
        this['solution_detail'] = solutionDetail;
        return this;
    }
    public set solutionDetail(solutionDetail: string  | undefined) {
        this['solution_detail'] = solutionDetail;
    }
    public get solutionDetail(): string | undefined {
        return this['solution_detail'];
    }
    public withUrl(url: string): VulInfo {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): VulInfo {
        this['description'] = description;
        return this;
    }
    public withType(type: string): VulInfo {
        this['type'] = type;
        return this;
    }
    public withHostIdList(hostIdList: Array<string>): VulInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withCveList(cveList: Array<VulInfoCveList>): VulInfo {
        this['cve_list'] = cveList;
        return this;
    }
    public set cveList(cveList: Array<VulInfoCveList>  | undefined) {
        this['cve_list'] = cveList;
    }
    public get cveList(): Array<VulInfoCveList> | undefined {
        return this['cve_list'];
    }
    public withPatchUrl(patchUrl: string): VulInfo {
        this['patch_url'] = patchUrl;
        return this;
    }
    public set patchUrl(patchUrl: string  | undefined) {
        this['patch_url'] = patchUrl;
    }
    public get patchUrl(): string | undefined {
        return this['patch_url'];
    }
    public withRepairPriority(repairPriority: string): VulInfo {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
    public withHostsNum(hostsNum: VulnerabilityHostNumberInfo): VulInfo {
        this['hosts_num'] = hostsNum;
        return this;
    }
    public set hostsNum(hostsNum: VulnerabilityHostNumberInfo  | undefined) {
        this['hosts_num'] = hostsNum;
    }
    public get hostsNum(): VulnerabilityHostNumberInfo | undefined {
        return this['hosts_num'];
    }
    public withRepairSuccessNum(repairSuccessNum: number): VulInfo {
        this['repair_success_num'] = repairSuccessNum;
        return this;
    }
    public set repairSuccessNum(repairSuccessNum: number  | undefined) {
        this['repair_success_num'] = repairSuccessNum;
    }
    public get repairSuccessNum(): number | undefined {
        return this['repair_success_num'];
    }
    public withFixedNum(fixedNum: number): VulInfo {
        this['fixed_num'] = fixedNum;
        return this;
    }
    public set fixedNum(fixedNum: number  | undefined) {
        this['fixed_num'] = fixedNum;
    }
    public get fixedNum(): number | undefined {
        return this['fixed_num'];
    }
    public withIgnoredNum(ignoredNum: number): VulInfo {
        this['ignored_num'] = ignoredNum;
        return this;
    }
    public set ignoredNum(ignoredNum: number  | undefined) {
        this['ignored_num'] = ignoredNum;
    }
    public get ignoredNum(): number | undefined {
        return this['ignored_num'];
    }
    public withVerifyNum(verifyNum: number): VulInfo {
        this['verify_num'] = verifyNum;
        return this;
    }
    public set verifyNum(verifyNum: number  | undefined) {
        this['verify_num'] = verifyNum;
    }
    public get verifyNum(): number | undefined {
        return this['verify_num'];
    }
    public withRepairPriorityList(repairPriorityList: Array<RepairPriorityListInfo>): VulInfo {
        this['repair_priority_list'] = repairPriorityList;
        return this;
    }
    public set repairPriorityList(repairPriorityList: Array<RepairPriorityListInfo>  | undefined) {
        this['repair_priority_list'] = repairPriorityList;
    }
    public get repairPriorityList(): Array<RepairPriorityListInfo> | undefined {
        return this['repair_priority_list'];
    }
}