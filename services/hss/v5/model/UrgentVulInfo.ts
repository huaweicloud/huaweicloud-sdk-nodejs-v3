import { VulnerabilityHostNumberInfo } from './VulnerabilityHostNumberInfo';


export class UrgentVulInfo {
    private 'vul_name'?: string;
    private 'vul_id'?: string;
    private 'label_list'?: Array<string>;
    private 'hosts_num'?: VulnerabilityHostNumberInfo;
    private 'scan_time'?: number;
    private 'publish_time'?: number;
    private 'solution_detail'?: string;
    public description?: string;
    private 'scan_status'?: string;
    private 'severity_level'?: string;
    private 'scanning_host_num'?: number;
    private 'success_host_num'?: number;
    private 'failed_host_num'?: number;
    public constructor() { 
    }
    public withVulName(vulName: string): UrgentVulInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulId(vulId: string): UrgentVulInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withLabelList(labelList: Array<string>): UrgentVulInfo {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<string>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<string> | undefined {
        return this['label_list'];
    }
    public withHostsNum(hostsNum: VulnerabilityHostNumberInfo): UrgentVulInfo {
        this['hosts_num'] = hostsNum;
        return this;
    }
    public set hostsNum(hostsNum: VulnerabilityHostNumberInfo  | undefined) {
        this['hosts_num'] = hostsNum;
    }
    public get hostsNum(): VulnerabilityHostNumberInfo | undefined {
        return this['hosts_num'];
    }
    public withScanTime(scanTime: number): UrgentVulInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withPublishTime(publishTime: number): UrgentVulInfo {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: number  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): number | undefined {
        return this['publish_time'];
    }
    public withSolutionDetail(solutionDetail: string): UrgentVulInfo {
        this['solution_detail'] = solutionDetail;
        return this;
    }
    public set solutionDetail(solutionDetail: string  | undefined) {
        this['solution_detail'] = solutionDetail;
    }
    public get solutionDetail(): string | undefined {
        return this['solution_detail'];
    }
    public withDescription(description: string): UrgentVulInfo {
        this['description'] = description;
        return this;
    }
    public withScanStatus(scanStatus: string): UrgentVulInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withSeverityLevel(severityLevel: string): UrgentVulInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withScanningHostNum(scanningHostNum: number): UrgentVulInfo {
        this['scanning_host_num'] = scanningHostNum;
        return this;
    }
    public set scanningHostNum(scanningHostNum: number  | undefined) {
        this['scanning_host_num'] = scanningHostNum;
    }
    public get scanningHostNum(): number | undefined {
        return this['scanning_host_num'];
    }
    public withSuccessHostNum(successHostNum: number): UrgentVulInfo {
        this['success_host_num'] = successHostNum;
        return this;
    }
    public set successHostNum(successHostNum: number  | undefined) {
        this['success_host_num'] = successHostNum;
    }
    public get successHostNum(): number | undefined {
        return this['success_host_num'];
    }
    public withFailedHostNum(failedHostNum: number): UrgentVulInfo {
        this['failed_host_num'] = failedHostNum;
        return this;
    }
    public set failedHostNum(failedHostNum: number  | undefined) {
        this['failed_host_num'] = failedHostNum;
    }
    public get failedHostNum(): number | undefined {
        return this['failed_host_num'];
    }
}