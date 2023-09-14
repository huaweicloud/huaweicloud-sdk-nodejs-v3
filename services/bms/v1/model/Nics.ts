import { CreateServerNicAllowedAddressPairs } from './CreateServerNicAllowedAddressPairs';


export class Nics {
    private 'subnet_id'?: string;
    private 'ip_address'?: string;
    private 'allowed_address_pairs'?: Array<CreateServerNicAllowedAddressPairs>;
    public constructor(subnetId?: string) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): Nics {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIpAddress(ipAddress: string): Nics {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<CreateServerNicAllowedAddressPairs>): Nics {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<CreateServerNicAllowedAddressPairs>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<CreateServerNicAllowedAddressPairs> | undefined {
        return this['allowed_address_pairs'];
    }
}