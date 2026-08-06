import { UpdateKeyPolicyResponseBodyPolicyValidityPeriod } from './UpdateKeyPolicyResponseBodyPolicyValidityPeriod';


export class UpdateKeyPolicyResponseBodyPolicy {
    public version?: string;
    private 'validity_period'?: UpdateKeyPolicyResponseBodyPolicyValidityPeriod;
    private 'allowed_access_point'?: Array<string>;
    private 'allowed_data_security_zone'?: Array<string>;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): UpdateKeyPolicyResponseBodyPolicy {
        this['version'] = version;
        return this;
    }
    public withValidityPeriod(validityPeriod: UpdateKeyPolicyResponseBodyPolicyValidityPeriod): UpdateKeyPolicyResponseBodyPolicy {
        this['validity_period'] = validityPeriod;
        return this;
    }
    public set validityPeriod(validityPeriod: UpdateKeyPolicyResponseBodyPolicyValidityPeriod  | undefined) {
        this['validity_period'] = validityPeriod;
    }
    public get validityPeriod(): UpdateKeyPolicyResponseBodyPolicyValidityPeriod | undefined {
        return this['validity_period'];
    }
    public withAllowedAccessPoint(allowedAccessPoint: Array<string>): UpdateKeyPolicyResponseBodyPolicy {
        this['allowed_access_point'] = allowedAccessPoint;
        return this;
    }
    public set allowedAccessPoint(allowedAccessPoint: Array<string>  | undefined) {
        this['allowed_access_point'] = allowedAccessPoint;
    }
    public get allowedAccessPoint(): Array<string> | undefined {
        return this['allowed_access_point'];
    }
    public withAllowedDataSecurityZone(allowedDataSecurityZone: Array<string>): UpdateKeyPolicyResponseBodyPolicy {
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