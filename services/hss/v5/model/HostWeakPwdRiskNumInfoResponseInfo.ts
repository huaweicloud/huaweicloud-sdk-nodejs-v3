

export class HostWeakPwdRiskNumInfoResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'weak_pwd_num'?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): HostWeakPwdRiskNumInfoResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): HostWeakPwdRiskNumInfoResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): HostWeakPwdRiskNumInfoResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withWeakPwdNum(weakPwdNum: number): HostWeakPwdRiskNumInfoResponseInfo {
        this['weak_pwd_num'] = weakPwdNum;
        return this;
    }
    public set weakPwdNum(weakPwdNum: number  | undefined) {
        this['weak_pwd_num'] = weakPwdNum;
    }
    public get weakPwdNum(): number | undefined {
        return this['weak_pwd_num'];
    }
}