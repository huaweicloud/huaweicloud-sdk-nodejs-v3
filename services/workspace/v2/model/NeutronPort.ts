import { FixedIp } from './FixedIp';


export class NeutronPort {
    public id?: string;
    public status?: string;
    private 'network_id'?: string;
    private 'fixed_ips'?: Array<FixedIp>;
    public constructor() { 
    }
    public withId(id: string): NeutronPort {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): NeutronPort {
        this['status'] = status;
        return this;
    }
    public withNetworkId(networkId: string): NeutronPort {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withFixedIps(fixedIps: Array<FixedIp>): NeutronPort {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<FixedIp>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<FixedIp> | undefined {
        return this['fixed_ips'];
    }
}