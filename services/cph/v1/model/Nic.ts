import { NicIpv6Bandwidth } from './NicIpv6Bandwidth';


export class Nic {
    private 'subnet_id'?: string;
    private 'ipv6_enable'?: boolean;
    private 'ipv6_bandwidth'?: NicIpv6Bandwidth;
    public constructor(subnetId?: string) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): Nic {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIpv6Enable(ipv6Enable: boolean): Nic {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: NicIpv6Bandwidth): Nic {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: NicIpv6Bandwidth  | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth(): NicIpv6Bandwidth | undefined {
        return this['ipv6_bandwidth'];
    }
}