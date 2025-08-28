

export class ShowVulReportDataResponseInfoHosts {
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'scan_time'?: number;
    private 'severity_level'?: string;
    private 'vul_total_num'?: number;
    private 'host_id'?: string;
    public constructor() { 
    }
    public withHostName(hostName: string): ShowVulReportDataResponseInfoHosts {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): ShowVulReportDataResponseInfoHosts {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ShowVulReportDataResponseInfoHosts {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withScanTime(scanTime: number): ShowVulReportDataResponseInfoHosts {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withSeverityLevel(severityLevel: string): ShowVulReportDataResponseInfoHosts {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withVulTotalNum(vulTotalNum: number): ShowVulReportDataResponseInfoHosts {
        this['vul_total_num'] = vulTotalNum;
        return this;
    }
    public set vulTotalNum(vulTotalNum: number  | undefined) {
        this['vul_total_num'] = vulTotalNum;
    }
    public get vulTotalNum(): number | undefined {
        return this['vul_total_num'];
    }
    public withHostId(hostId: string): ShowVulReportDataResponseInfoHosts {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}