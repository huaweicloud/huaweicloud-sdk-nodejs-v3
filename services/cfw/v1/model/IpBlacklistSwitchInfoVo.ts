

export class IpBlacklistSwitchInfoVo {
    public status?: number;
    public constructor() { 
    }
    public withStatus(status: number): IpBlacklistSwitchInfoVo {
        this['status'] = status;
        return this;
    }
}