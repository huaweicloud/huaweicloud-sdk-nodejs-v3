

export class SecurityCheckHostInfoResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_public_ip'?: string;
    private 'host_private_ip'?: string;
    private 'scan_time'?: number;
    private 'failed_num'?: number;
    private 'passed_num'?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): SecurityCheckHostInfoResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): SecurityCheckHostInfoResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostPublicIp(hostPublicIp: string): SecurityCheckHostInfoResponseInfo {
        this['host_public_ip'] = hostPublicIp;
        return this;
    }
    public set hostPublicIp(hostPublicIp: string  | undefined) {
        this['host_public_ip'] = hostPublicIp;
    }
    public get hostPublicIp(): string | undefined {
        return this['host_public_ip'];
    }
    public withHostPrivateIp(hostPrivateIp: string): SecurityCheckHostInfoResponseInfo {
        this['host_private_ip'] = hostPrivateIp;
        return this;
    }
    public set hostPrivateIp(hostPrivateIp: string  | undefined) {
        this['host_private_ip'] = hostPrivateIp;
    }
    public get hostPrivateIp(): string | undefined {
        return this['host_private_ip'];
    }
    public withScanTime(scanTime: number): SecurityCheckHostInfoResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withFailedNum(failedNum: number): SecurityCheckHostInfoResponseInfo {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withPassedNum(passedNum: number): SecurityCheckHostInfoResponseInfo {
        this['passed_num'] = passedNum;
        return this;
    }
    public set passedNum(passedNum: number  | undefined) {
        this['passed_num'] = passedNum;
    }
    public get passedNum(): number | undefined {
        return this['passed_num'];
    }
}