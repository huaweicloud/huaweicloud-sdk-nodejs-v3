import { VgwIkePolicy } from './VgwIkePolicy';
import { VgwIpsecPolicy } from './VgwIpsecPolicy';


export class PolicyTemplate {
    private 'ike_policy'?: VgwIkePolicy;
    private 'ipsec_policy'?: VgwIpsecPolicy;
    public constructor() { 
    }
    public withIkePolicy(ikePolicy: VgwIkePolicy): PolicyTemplate {
        this['ike_policy'] = ikePolicy;
        return this;
    }
    public set ikePolicy(ikePolicy: VgwIkePolicy  | undefined) {
        this['ike_policy'] = ikePolicy;
    }
    public get ikePolicy(): VgwIkePolicy | undefined {
        return this['ike_policy'];
    }
    public withIpsecPolicy(ipsecPolicy: VgwIpsecPolicy): PolicyTemplate {
        this['ipsec_policy'] = ipsecPolicy;
        return this;
    }
    public set ipsecPolicy(ipsecPolicy: VgwIpsecPolicy  | undefined) {
        this['ipsec_policy'] = ipsecPolicy;
    }
    public get ipsecPolicy(): VgwIpsecPolicy | undefined {
        return this['ipsec_policy'];
    }
}