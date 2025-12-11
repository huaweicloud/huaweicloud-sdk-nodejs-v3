import { ShowVulReportDataResponseInfoHosts } from './ShowVulReportDataResponseInfoHosts';
import { ShowVulReportDataResponseInfoSumary } from './ShowVulReportDataResponseInfoSumary';
import { ShowVulReportDataResponseInfoSummary } from './ShowVulReportDataResponseInfoSummary';
import { ShowVulReportDataResponseInfoVulnerabilities } from './ShowVulReportDataResponseInfoVulnerabilities';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulReportDataResponse extends SdkResponse {
    public sumary?: ShowVulReportDataResponseInfoSumary;
    public summary?: ShowVulReportDataResponseInfoSummary;
    public hosts?: Array<ShowVulReportDataResponseInfoHosts>;
    public vulnerabilities?: Array<ShowVulReportDataResponseInfoVulnerabilities>;
    private 'report_create_time'?: number;
    private 'vulnerability_total_count'?: number;
    private 'host_total_count'?: number;
    public constructor() { 
        super();
    }
    public withSumary(sumary: ShowVulReportDataResponseInfoSumary): ShowVulReportDataResponse {
        this['sumary'] = sumary;
        return this;
    }
    public withSummary(summary: ShowVulReportDataResponseInfoSummary): ShowVulReportDataResponse {
        this['summary'] = summary;
        return this;
    }
    public withHosts(hosts: Array<ShowVulReportDataResponseInfoHosts>): ShowVulReportDataResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withVulnerabilities(vulnerabilities: Array<ShowVulReportDataResponseInfoVulnerabilities>): ShowVulReportDataResponse {
        this['vulnerabilities'] = vulnerabilities;
        return this;
    }
    public withReportCreateTime(reportCreateTime: number): ShowVulReportDataResponse {
        this['report_create_time'] = reportCreateTime;
        return this;
    }
    public set reportCreateTime(reportCreateTime: number  | undefined) {
        this['report_create_time'] = reportCreateTime;
    }
    public get reportCreateTime(): number | undefined {
        return this['report_create_time'];
    }
    public withVulnerabilityTotalCount(vulnerabilityTotalCount: number): ShowVulReportDataResponse {
        this['vulnerability_total_count'] = vulnerabilityTotalCount;
        return this;
    }
    public set vulnerabilityTotalCount(vulnerabilityTotalCount: number  | undefined) {
        this['vulnerability_total_count'] = vulnerabilityTotalCount;
    }
    public get vulnerabilityTotalCount(): number | undefined {
        return this['vulnerability_total_count'];
    }
    public withHostTotalCount(hostTotalCount: number): ShowVulReportDataResponse {
        this['host_total_count'] = hostTotalCount;
        return this;
    }
    public set hostTotalCount(hostTotalCount: number  | undefined) {
        this['host_total_count'] = hostTotalCount;
    }
    public get hostTotalCount(): number | undefined {
        return this['host_total_count'];
    }
}