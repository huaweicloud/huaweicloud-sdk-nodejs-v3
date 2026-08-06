import { ListKeyPolicyResponseBodyPolicyValidityPeriod } from './ListKeyPolicyResponseBodyPolicyValidityPeriod';


export class ListKeyPolicyResponseBodyPolicy {
    public version?: string;
    public validityPeriod?: ListKeyPolicyResponseBodyPolicyValidityPeriod;
    public allowedAccessPoint?: Array<string>;
    private 'allowed_data_security_zone'?: Array<string>;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): ListKeyPolicyResponseBodyPolicy {
        this['version'] = version;
        return this;
    }
    public withValidityPeriod(validityPeriod: ListKeyPolicyResponseBodyPolicyValidityPeriod): ListKeyPolicyResponseBodyPolicy {
        this['validityPeriod'] = validityPeriod;
        return this;
    }
    public withAllowedAccessPoint(allowedAccessPoint: Array<string>): ListKeyPolicyResponseBodyPolicy {
        this['allowedAccessPoint'] = allowedAccessPoint;
        return this;
    }
    public withAllowedDataSecurityZone(allowedDataSecurityZone: Array<string>): ListKeyPolicyResponseBodyPolicy {
        this['allowed_data_security_zone'] = allowedDataSecurityZone;
        return this;
    }
    public set allowedDataSecurityZone(allowedDataSecurityZone: Array<string>  | undefined) {
        this['allowed_data_security_zone'] = allowedDataSecurityZone;
    }
    public get allowedDataSecurityZone(): Array<string> | undefined {
        return this['allowed_data_security_zone'];
    }
}