

export class HostRiskNumInfoResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'scan_time'?: number;
    private 'high_risk_num'?: number;
    private 'medium_risk_num'?: number;
    private 'low_risk_num'?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): HostRiskNumInfoResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): HostRiskNumInfoResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): HostRiskNumInfoResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withScanTime(scanTime: number): HostRiskNumInfoResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withHighRiskNum(highRiskNum: number): HostRiskNumInfoResponseInfo {
        this['high_risk_num'] = highRiskNum;
        return this;
    }
    public set highRiskNum(highRiskNum: number  | undefined) {
        this['high_risk_num'] = highRiskNum;
    }
    public get highRiskNum(): number | undefined {
        return this['high_risk_num'];
    }
    public withMediumRiskNum(mediumRiskNum: number): HostRiskNumInfoResponseInfo {
        this['medium_risk_num'] = mediumRiskNum;
        return this;
    }
    public set mediumRiskNum(mediumRiskNum: number  | undefined) {
        this['medium_risk_num'] = mediumRiskNum;
    }
    public get mediumRiskNum(): number | undefined {
        return this['medium_risk_num'];
    }
    public withLowRiskNum(lowRiskNum: number): HostRiskNumInfoResponseInfo {
        this['low_risk_num'] = lowRiskNum;
        return this;
    }
    public set lowRiskNum(lowRiskNum: number  | undefined) {
        this['low_risk_num'] = lowRiskNum;
    }
    public get lowRiskNum(): number | undefined {
        return this['low_risk_num'];
    }
}