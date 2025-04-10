

export class ChangeAntivirusPolicyRequestInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'start_type'?: string;
    private 'scan_period'?: string;
    private 'scan_period_date'?: number;
    private 'scan_time'?: number;
    private 'scan_hour'?: number;
    private 'scan_minute'?: number;
    private 'timezone_offset'?: number;
    private 'file_types'?: Array<number>;
    private 'scan_dir'?: string;
    private 'ignore_dir'?: string;
    public action?: string;
    private 'whether_paid_task'?: boolean;
    private 'host_ids'?: Array<string>;
    public constructor(policyId?: string, policyName?: string, startType?: string, fileTypes?: Array<number>, action?: string, whetherPaidTask?: boolean, hostIds?: Array<string>) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
        this['start_type'] = startType;
        this['file_types'] = fileTypes;
        this['action'] = action;
        this['whether_paid_task'] = whetherPaidTask;
        this['host_ids'] = hostIds;
    }
    public withPolicyId(policyId: string): ChangeAntivirusPolicyRequestInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ChangeAntivirusPolicyRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withStartType(startType: string): ChangeAntivirusPolicyRequestInfo {
        this['start_type'] = startType;
        return this;
    }
    public set startType(startType: string  | undefined) {
        this['start_type'] = startType;
    }
    public get startType(): string | undefined {
        return this['start_type'];
    }
    public withScanPeriod(scanPeriod: string): ChangeAntivirusPolicyRequestInfo {
        this['scan_period'] = scanPeriod;
        return this;
    }
    public set scanPeriod(scanPeriod: string  | undefined) {
        this['scan_period'] = scanPeriod;
    }
    public get scanPeriod(): string | undefined {
        return this['scan_period'];
    }
    public withScanPeriodDate(scanPeriodDate: number): ChangeAntivirusPolicyRequestInfo {
        this['scan_period_date'] = scanPeriodDate;
        return this;
    }
    public set scanPeriodDate(scanPeriodDate: number  | undefined) {
        this['scan_period_date'] = scanPeriodDate;
    }
    public get scanPeriodDate(): number | undefined {
        return this['scan_period_date'];
    }
    public withScanTime(scanTime: number): ChangeAntivirusPolicyRequestInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withScanHour(scanHour: number): ChangeAntivirusPolicyRequestInfo {
        this['scan_hour'] = scanHour;
        return this;
    }
    public set scanHour(scanHour: number  | undefined) {
        this['scan_hour'] = scanHour;
    }
    public get scanHour(): number | undefined {
        return this['scan_hour'];
    }
    public withScanMinute(scanMinute: number): ChangeAntivirusPolicyRequestInfo {
        this['scan_minute'] = scanMinute;
        return this;
    }
    public set scanMinute(scanMinute: number  | undefined) {
        this['scan_minute'] = scanMinute;
    }
    public get scanMinute(): number | undefined {
        return this['scan_minute'];
    }
    public withTimezoneOffset(timezoneOffset: number): ChangeAntivirusPolicyRequestInfo {
        this['timezone_offset'] = timezoneOffset;
        return this;
    }
    public set timezoneOffset(timezoneOffset: number  | undefined) {
        this['timezone_offset'] = timezoneOffset;
    }
    public get timezoneOffset(): number | undefined {
        return this['timezone_offset'];
    }
    public withFileTypes(fileTypes: Array<number>): ChangeAntivirusPolicyRequestInfo {
        this['file_types'] = fileTypes;
        return this;
    }
    public set fileTypes(fileTypes: Array<number>  | undefined) {
        this['file_types'] = fileTypes;
    }
    public get fileTypes(): Array<number> | undefined {
        return this['file_types'];
    }
    public withScanDir(scanDir: string): ChangeAntivirusPolicyRequestInfo {
        this['scan_dir'] = scanDir;
        return this;
    }
    public set scanDir(scanDir: string  | undefined) {
        this['scan_dir'] = scanDir;
    }
    public get scanDir(): string | undefined {
        return this['scan_dir'];
    }
    public withIgnoreDir(ignoreDir: string): ChangeAntivirusPolicyRequestInfo {
        this['ignore_dir'] = ignoreDir;
        return this;
    }
    public set ignoreDir(ignoreDir: string  | undefined) {
        this['ignore_dir'] = ignoreDir;
    }
    public get ignoreDir(): string | undefined {
        return this['ignore_dir'];
    }
    public withAction(action: string): ChangeAntivirusPolicyRequestInfo {
        this['action'] = action;
        return this;
    }
    public withWhetherPaidTask(whetherPaidTask: boolean): ChangeAntivirusPolicyRequestInfo {
        this['whether_paid_task'] = whetherPaidTask;
        return this;
    }
    public set whetherPaidTask(whetherPaidTask: boolean  | undefined) {
        this['whether_paid_task'] = whetherPaidTask;
    }
    public get whetherPaidTask(): boolean | undefined {
        return this['whether_paid_task'];
    }
    public withHostIds(hostIds: Array<string>): ChangeAntivirusPolicyRequestInfo {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
}