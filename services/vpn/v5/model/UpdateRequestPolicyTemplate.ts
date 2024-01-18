import { UpdateVgwIkePolicy } from './UpdateVgwIkePolicy';
import { UpdateVgwIpsecPolicy } from './UpdateVgwIpsecPolicy';


export class UpdateRequestPolicyTemplate {
    private 'ike_policy'?: UpdateVgwIkePolicy;
    private 'ipsec_policy'?: UpdateVgwIpsecPolicy;
    public constructor() { 
    }
    public withIkePolicy(ikePolicy: UpdateVgwIkePolicy): UpdateRequestPolicyTemplate {
        this['ike_policy'] = ikePolicy;
        return this;
    }
    public set ikePolicy(ikePolicy: UpdateVgwIkePolicy  | undefined) {
        this['ike_policy'] = ikePolicy;
    }
    public get ikePolicy(): UpdateVgwIkePolicy | undefined {
        return this['ike_policy'];
    }
    public withIpsecPolicy(ipsecPolicy: UpdateVgwIpsecPolicy): UpdateRequestPolicyTemplate {
        this['ipsec_policy'] = ipsecPolicy;
        return this;
    }
    public set ipsecPolicy(ipsecPolicy: UpdateVgwIpsecPolicy  | undefined) {
        this['ipsec_policy'] = ipsecPolicy;
    }
    public get ipsecPolicy(): UpdateVgwIpsecPolicy | undefined {
        return this['ipsec_policy'];
    }
}