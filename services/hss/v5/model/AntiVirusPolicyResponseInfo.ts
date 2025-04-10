import { AntiVirusPolicyHostResponseInfo } from './AntiVirusPolicyHostResponseInfo';


export class AntiVirusPolicyResponseInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'start_type'?: string;
    private 'scan_period'?: string;
    private 'scan_period_date'?: number;
    private 'scan_time'?: number;
    private 'scan_hour'?: number;
    private 'scan_minute'?: number;
    private 'next_start_time'?: number;
    private 'scan_dir'?: string;
    private 'ignore_dir'?: string;
    public action?: string;
    public invalidate?: boolean;
    private 'host_num'?: number;
    private 'host_info_list'?: Array<AntiVirusPolicyHostResponseInfo>;
    private 'whether_paid_task'?: boolean;
    private 'file_type_list'?: Array<number>;
    public constructor() { 
    }
    public withPolicyId(policyId: string): AntiVirusPolicyResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): AntiVirusPolicyResponseInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withStartType(startType: string): AntiVirusPolicyResponseInfo {
        this['start_type'] = startType;
        return this;
    }
    public set startType(startType: string  | undefined) {
        this['start_type'] = startType;
    }
    public get startType(): string | undefined {
        return this['start_type'];
    }
    public withScanPeriod(scanPeriod: string): AntiVirusPolicyResponseInfo {
        this['scan_period'] = scanPeriod;
        return this;
    }
    public set scanPeriod(scanPeriod: string  | undefined) {
        this['scan_period'] = scanPeriod;
    }
    public get scanPeriod(): string | undefined {
        return this['scan_period'];
    }
    public withScanPeriodDate(scanPeriodDate: number): AntiVirusPolicyResponseInfo {
        this['scan_period_date'] = scanPeriodDate;
        return this;
    }
    public set scanPeriodDate(scanPeriodDate: number  | undefined) {
        this['scan_period_date'] = scanPeriodDate;
    }
    public get scanPeriodDate(): number | undefined {
        return this['scan_period_date'];
    }
    public withScanTime(scanTime: number): AntiVirusPolicyResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withScanHour(scanHour: number): AntiVirusPolicyResponseInfo {
        this['scan_hour'] = scanHour;
        return this;
    }
    public set scanHour(scanHour: number  | undefined) {
        this['scan_hour'] = scanHour;
    }
    public get scanHour(): number | undefined {
        return this['scan_hour'];
    }
    public withScanMinute(scanMinute: number): AntiVirusPolicyResponseInfo {
        this['scan_minute'] = scanMinute;
        return this;
    }
    public set scanMinute(scanMinute: number  | undefined) {
        this['scan_minute'] = scanMinute;
    }
    public get scanMinute(): number | undefined {
        return this['scan_minute'];
    }
    public withNextStartTime(nextStartTime: number): AntiVirusPolicyResponseInfo {
        this['next_start_time'] = nextStartTime;
        return this;
    }
    public set nextStartTime(nextStartTime: number  | undefined) {
        this['next_start_time'] = nextStartTime;
    }
    public get nextStartTime(): number | undefined {
        return this['next_start_time'];
    }
    public withScanDir(scanDir: string): AntiVirusPolicyResponseInfo {
        this['scan_dir'] = scanDir;
        return this;
    }
    public set scanDir(scanDir: string  | undefined) {
        this['scan_dir'] = scanDir;
    }
    public get scanDir(): string | undefined {
        return this['scan_dir'];
    }
    public withIgnoreDir(ignoreDir: string): AntiVirusPolicyResponseInfo {
        this['ignore_dir'] = ignoreDir;
        return this;
    }
    public set ignoreDir(ignoreDir: string  | undefined) {
        this['ignore_dir'] = ignoreDir;
    }
    public get ignoreDir(): string | undefined {
        return this['ignore_dir'];
    }
    public withAction(action: string): AntiVirusPolicyResponseInfo {
        this['action'] = action;
        return this;
    }
    public withInvalidate(invalidate: boolean): AntiVirusPolicyResponseInfo {
        this['invalidate'] = invalidate;
        return this;
    }
    public withHostNum(hostNum: number): AntiVirusPolicyResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withHostInfoList(hostInfoList: Array<AntiVirusPolicyHostResponseInfo>): AntiVirusPolicyResponseInfo {
        this['host_info_list'] = hostInfoList;
        return this;
    }
    public set hostInfoList(hostInfoList: Array<AntiVirusPolicyHostResponseInfo>  | undefined) {
        this['host_info_list'] = hostInfoList;
    }
    public get hostInfoList(): Array<AntiVirusPolicyHostResponseInfo> | undefined {
        return this['host_info_list'];
    }
    public withWhetherPaidTask(whetherPaidTask: boolean): AntiVirusPolicyResponseInfo {
        this['whether_paid_task'] = whetherPaidTask;
        return this;
    }
    public set whetherPaidTask(whetherPaidTask: boolean  | undefined) {
        this['whether_paid_task'] = whetherPaidTask;
    }
    public get whetherPaidTask(): boolean | undefined {
        return this['whether_paid_task'];
    }
    public withFileTypeList(fileTypeList: Array<number>): AntiVirusPolicyResponseInfo {
        this['file_type_list'] = fileTypeList;
        return this;
    }
    public set fileTypeList(fileTypeList: Array<number>  | undefined) {
        this['file_type_list'] = fileTypeList;
    }
    public get fileTypeList(): Array<number> | undefined {
        return this['file_type_list'];
    }
}