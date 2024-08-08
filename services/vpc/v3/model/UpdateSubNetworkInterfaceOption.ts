import { AllowedAddressPair } from './AllowedAddressPair';


export class UpdateSubNetworkInterfaceOption {
    public description?: string;
    private 'security_groups'?: Array<string>;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair>;
    public constructor() { 
    }
    public withDescription(description: string): UpdateSubNetworkInterfaceOption {
        this['description'] = description;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): UpdateSubNetworkInterfaceOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): UpdateSubNetworkInterfaceOption {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<AllowedAddressPair> | undefined {
        return this['allowed_address_pairs'];
    }
}