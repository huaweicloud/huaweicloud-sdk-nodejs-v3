import { SecurityProfile } from './SecurityProfile';
import { SecurityTarget } from './SecurityTarget';


export class AddSecurityProfileDTO {
    private 'security_type'?: string;
    private 'alarm_level'?: string;
    private 'security_level'?: string;
    public enable?: boolean;
    public profile?: Array<SecurityProfile>;
    private 'profile_targets'?: SecurityTarget;
    public constructor(securityType?: string) { 
        this['security_type'] = securityType;
    }
    public withSecurityType(securityType: string): AddSecurityProfileDTO {
        this['security_type'] = securityType;
        return this;
    }
    public set securityType(securityType: string  | undefined) {
        this['security_type'] = securityType;
    }
    public get securityType(): string | undefined {
        return this['security_type'];
    }
    public withAlarmLevel(alarmLevel: string): AddSecurityProfileDTO {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
    public withSecurityLevel(securityLevel: string): AddSecurityProfileDTO {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security_level'];
    }
    public withEnable(enable: boolean): AddSecurityProfileDTO {
        this['enable'] = enable;
        return this;
    }
    public withProfile(profile: Array<SecurityProfile>): AddSecurityProfileDTO {
        this['profile'] = profile;
        return this;
    }
    public withProfileTargets(profileTargets: SecurityTarget): AddSecurityProfileDTO {
        this['profile_targets'] = profileTargets;
        return this;
    }
    public set profileTargets(profileTargets: SecurityTarget  | undefined) {
        this['profile_targets'] = profileTargets;
    }
    public get profileTargets(): SecurityTarget | undefined {
        return this['profile_targets'];
    }
}