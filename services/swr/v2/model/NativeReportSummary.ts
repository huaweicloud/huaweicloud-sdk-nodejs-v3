import { Scanner } from './Scanner';
import { VulnerabilitySummary } from './VulnerabilitySummary';


export class NativeReportSummary {
    private 'report_id'?: string;
    private 'scan_status'?: NativeReportSummaryScanStatusEnum | string;
    public severity?: NativeReportSummarySeverityEnum | string;
    public duration?: number;
    public summary?: VulnerabilitySummary;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'complete_percent'?: number;
    public scanner?: Scanner;
    public constructor() { 
    }
    public withReportId(reportId: string): NativeReportSummary {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withScanStatus(scanStatus: NativeReportSummaryScanStatusEnum | string): NativeReportSummary {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: NativeReportSummaryScanStatusEnum | string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): NativeReportSummaryScanStatusEnum | string | undefined {
        return this['scan_status'];
    }
    public withSeverity(severity: NativeReportSummarySeverityEnum | string): NativeReportSummary {
        this['severity'] = severity;
        return this;
    }
    public withDuration(duration: number): NativeReportSummary {
        this['duration'] = duration;
        return this;
    }
    public withSummary(summary: VulnerabilitySummary): NativeReportSummary {
        this['summary'] = summary;
        return this;
    }
    public withStartTime(startTime: string): NativeReportSummary {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): NativeReportSummary {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCompletePercent(completePercent: number): NativeReportSummary {
        this['complete_percent'] = completePercent;
        return this;
    }
    public set completePercent(completePercent: number  | undefined) {
        this['complete_percent'] = completePercent;
    }
    public get completePercent(): number | undefined {
        return this['complete_percent'];
    }
    public withScanner(scanner: Scanner): NativeReportSummary {
        this['scanner'] = scanner;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NativeReportSummaryScanStatusEnum {
    SUCCESS = 'Success',
    ERROR = 'Error',
    RUNNING = 'Running',
    PENDING = 'Pending'
}
/**
    * @export
    * @enum {string}
    */
export enum NativeReportSummarySeverityEnum {
    NONE = 'None',
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
    CRITICAL = 'Critical',
    SECURITY = 'Security'
}
