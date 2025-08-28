import { ShowVulReportDataResponseInfoCveList } from './ShowVulReportDataResponseInfoCveList';


export class ShowVulReportDataResponseInfoVulnerabilities {
    private 'vul_name'?: string;
    private 'scan_time'?: number;
    public type?: string;
    private 'cve_list'?: Array<ShowVulReportDataResponseInfoCveList>;
    private 'repair_priority'?: string;
    private 'host_num'?: number;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withVulName(vulName: string): ShowVulReportDataResponseInfoVulnerabilities {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withScanTime(scanTime: number): ShowVulReportDataResponseInfoVulnerabilities {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withType(type: string): ShowVulReportDataResponseInfoVulnerabilities {
        this['type'] = type;
        return this;
    }
    public withCveList(cveList: Array<ShowVulReportDataResponseInfoCveList>): ShowVulReportDataResponseInfoVulnerabilities {
        this['cve_list'] = cveList;
        return this;
    }
    public set cveList(cveList: Array<ShowVulReportDataResponseInfoCveList>  | undefined) {
        this['cve_list'] = cveList;
    }
    public get cveList(): Array<ShowVulReportDataResponseInfoCveList> | undefined {
        return this['cve_list'];
    }
    public withRepairPriority(repairPriority: string): ShowVulReportDataResponseInfoVulnerabilities {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
    public withHostNum(hostNum: number): ShowVulReportDataResponseInfoVulnerabilities {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withHostIdList(hostIdList: Array<string>): ShowVulReportDataResponseInfoVulnerabilities {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}