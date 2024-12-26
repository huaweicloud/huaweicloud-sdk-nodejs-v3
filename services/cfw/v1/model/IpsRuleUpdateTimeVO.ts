

export class IpsRuleUpdateTimeVO {
    private 'ips_type'?: number;
    private 'ips_version'?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withIpsType(ipsType: number): IpsRuleUpdateTimeVO {
        this['ips_type'] = ipsType;
        return this;
    }
    public set ipsType(ipsType: number  | undefined) {
        this['ips_type'] = ipsType;
    }
    public get ipsType(): number | undefined {
        return this['ips_type'];
    }
    public withIpsVersion(ipsVersion: string): IpsRuleUpdateTimeVO {
        this['ips_version'] = ipsVersion;
        return this;
    }
    public set ipsVersion(ipsVersion: string  | undefined) {
        this['ips_version'] = ipsVersion;
    }
    public get ipsVersion(): string | undefined {
        return this['ips_version'];
    }
    public withUpdateTime(updateTime: number): IpsRuleUpdateTimeVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}