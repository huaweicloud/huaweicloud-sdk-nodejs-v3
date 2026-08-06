import { ListKeyPolicyResponseBodyPolicyValidityPeriod } from './ListKeyPolicyResponseBodyPolicyValidityPeriod';


export class ShowKeyPolicyResponseBodyPolicy {
    public version?: string;
    private 'validity_period'?: ListKeyPolicyResponseBodyPolicyValidityPeriod;
    private 'allowed_access_point'?: Array<string>;
    private 'allowed_data_security_zone'?: Array<string>;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): ShowKeyPolicyResponseBodyPolicy {
        this['version'] = version;
        return this;
    }
    public withValidityPeriod(validityPeriod: ListKeyPolicyResponseBodyPolicyValidityPeriod): ShowKeyPolicyResponseBodyPolicy {
        this['validity_period'] = validityPeriod;
        return this;
    }
    public set validityPeriod(validityPeriod: ListKeyPolicyResponseBodyPolicyValidityPeriod  | undefined) {
        this['validity_period'] = validityPeriod;
    }
    public get validityPeriod(): ListKeyPolicyResponseBodyPolicyValidityPeriod | undefined {
        return this['validity_period'];
    }
    public withAllowedAccessPoint(allowedAccessPoint: Array<string>): ShowKeyPolicyResponseBodyPolicy {
        this['allowed_access_point'] = allowedAccessPoint;
        return this;
    }
    public set allowedAccessPoint(allowedAccessPoint: Array<string>  | undefined) {
        this['allowed_access_point'] = allowedAccessPoint;
    }
    public get allowedAccessPoint(): Array<string> | undefined {
        return this['allowed_access_point'];
    }
    public withAllowedDataSecurityZone(allowedDataSecurityZone: Array<string>): ShowKeyPolicyResponseBodyPolicy {
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