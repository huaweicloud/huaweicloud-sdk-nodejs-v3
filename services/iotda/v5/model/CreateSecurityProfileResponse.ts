import { SecurityProfile } from './SecurityProfile';
import { SecurityTarget } from './SecurityTarget';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecurityProfileResponse extends SdkResponse {
    private 'profile_id'?: string;
    private 'security_type'?: string;
    private 'alarm_level'?: string;
    private 'security_level'?: string;
    public enable?: boolean;
    public profile?: Array<SecurityProfile>;
    private 'profile_targets'?: SecurityTarget;
    public constructor() { 
        super();
    }
    public withProfileId(profileId: string): CreateSecurityProfileResponse {
        this['profile_id'] = profileId;
        return this;
    }
    public set profileId(profileId: string  | undefined) {
        this['profile_id'] = profileId;
    }
    public get profileId(): string | undefined {
        return this['profile_id'];
    }
    public withSecurityType(securityType: string): CreateSecurityProfileResponse {
        this['security_type'] = securityType;
        return this;
    }
    public set securityType(securityType: string  | undefined) {
        this['security_type'] = securityType;
    }
    public get securityType(): string | undefined {
        return this['security_type'];
    }
    public withAlarmLevel(alarmLevel: string): CreateSecurityProfileResponse {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
    public withSecurityLevel(securityLevel: string): CreateSecurityProfileResponse {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security_level'];
    }
    public withEnable(enable: boolean): CreateSecurityProfileResponse {
        this['enable'] = enable;
        return this;
    }
    public withProfile(profile: Array<SecurityProfile>): CreateSecurityProfileResponse {
        this['profile'] = profile;
        return this;
    }
    public withProfileTargets(profileTargets: SecurityTarget): CreateSecurityProfileResponse {
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