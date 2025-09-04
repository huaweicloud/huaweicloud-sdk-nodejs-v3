import { SecurityProfile } from './SecurityProfile';
import { SecurityTarget } from './SecurityTarget';


export class UpdateSecurityProfileDTO {
    private 'alarm_level'?: string;
    private 'security_level'?: string;
    public enable?: boolean;
    public profile?: Array<SecurityProfile>;
    private 'profile_targets'?: SecurityTarget;
    public constructor() { 
    }
    public withAlarmLevel(alarmLevel: string): UpdateSecurityProfileDTO {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
    public withSecurityLevel(securityLevel: string): UpdateSecurityProfileDTO {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security_level'];
    }
    public withEnable(enable: boolean): UpdateSecurityProfileDTO {
        this['enable'] = enable;
        return this;
    }
    public withProfile(profile: Array<SecurityProfile>): UpdateSecurityProfileDTO {
        this['profile'] = profile;
        return this;
    }
    public withProfileTargets(profileTargets: SecurityTarget): UpdateSecurityProfileDTO {
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