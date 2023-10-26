

export class BlockedIpResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'src_ip'?: string;
    private 'login_type'?: string;
    private 'intercept_num'?: number;
    private 'intercept_status'?: BlockedIpResponseInfoInterceptStatusEnum | string;
    private 'block_time'?: number;
    private 'latest_time'?: number;
    public constructor(hostId?: string, hostName?: string, srcIp?: string, loginType?: string, interceptNum?: number, interceptStatus?: string, blockTime?: number, latestTime?: number) { 
        this['host_id'] = hostId;
        this['host_name'] = hostName;
        this['src_ip'] = srcIp;
        this['login_type'] = loginType;
        this['intercept_num'] = interceptNum;
        this['intercept_status'] = interceptStatus;
        this['block_time'] = blockTime;
        this['latest_time'] = latestTime;
    }
    public withHostId(hostId: string): BlockedIpResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): BlockedIpResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withSrcIp(srcIp: string): BlockedIpResponseInfo {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withLoginType(loginType: string): BlockedIpResponseInfo {
        this['login_type'] = loginType;
        return this;
    }
    public set loginType(loginType: string  | undefined) {
        this['login_type'] = loginType;
    }
    public get loginType(): string | undefined {
        return this['login_type'];
    }
    public withInterceptNum(interceptNum: number): BlockedIpResponseInfo {
        this['intercept_num'] = interceptNum;
        return this;
    }
    public set interceptNum(interceptNum: number  | undefined) {
        this['intercept_num'] = interceptNum;
    }
    public get interceptNum(): number | undefined {
        return this['intercept_num'];
    }
    public withInterceptStatus(interceptStatus: BlockedIpResponseInfoInterceptStatusEnum | string): BlockedIpResponseInfo {
        this['intercept_status'] = interceptStatus;
        return this;
    }
    public set interceptStatus(interceptStatus: BlockedIpResponseInfoInterceptStatusEnum | string  | undefined) {
        this['intercept_status'] = interceptStatus;
    }
    public get interceptStatus(): BlockedIpResponseInfoInterceptStatusEnum | string | undefined {
        return this['intercept_status'];
    }
    public withBlockTime(blockTime: number): BlockedIpResponseInfo {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number  | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime(): number | undefined {
        return this['block_time'];
    }
    public withLatestTime(latestTime: number): BlockedIpResponseInfo {
        this['latest_time'] = latestTime;
        return this;
    }
    public set latestTime(latestTime: number  | undefined) {
        this['latest_time'] = latestTime;
    }
    public get latestTime(): number | undefined {
        return this['latest_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BlockedIpResponseInfoInterceptStatusEnum {
    INTERCEPTED = 'intercepted',
    CANCELED = 'canceled',
    CANCELLING = 'cancelling'
}
