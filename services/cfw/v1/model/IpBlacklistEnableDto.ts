

export class IpBlacklistEnableDto {
    public status?: number;
    public constructor(status?: number) { 
        this['status'] = status;
    }
    public withStatus(status: number): IpBlacklistEnableDto {
        this['status'] = status;
        return this;
    }
}