import { SecurityCheckHostInfo } from './SecurityCheckHostInfo';


export class SecurityCheckHostResultResponseInfo {
    private 'host_info'?: SecurityCheckHostInfo;
    public severity?: string;
    private 'risk_rating'?: number;
    private 'risk_num'?: number;
    private 'scan_time'?: number;
    public constructor() { 
    }
    public withHostInfo(hostInfo: SecurityCheckHostInfo): SecurityCheckHostResultResponseInfo {
        this['host_info'] = hostInfo;
        return this;
    }
    public set hostInfo(hostInfo: SecurityCheckHostInfo  | undefined) {
        this['host_info'] = hostInfo;
    }
    public get hostInfo(): SecurityCheckHostInfo | undefined {
        return this['host_info'];
    }
    public withSeverity(severity: string): SecurityCheckHostResultResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withRiskRating(riskRating: number): SecurityCheckHostResultResponseInfo {
        this['risk_rating'] = riskRating;
        return this;
    }
    public set riskRating(riskRating: number  | undefined) {
        this['risk_rating'] = riskRating;
    }
    public get riskRating(): number | undefined {
        return this['risk_rating'];
    }
    public withRiskNum(riskNum: number): SecurityCheckHostResultResponseInfo {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withScanTime(scanTime: number): SecurityCheckHostResultResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
}