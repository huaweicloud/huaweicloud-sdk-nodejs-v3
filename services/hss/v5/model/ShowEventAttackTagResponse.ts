
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEventAttackTagResponse extends SdkResponse {
    private 'attack_success_num'?: number;
    private 'attack_attempt_num'?: number;
    private 'attack_blocked_num'?: number;
    private 'abnormal_behavior_num'?: number;
    private 'collapsible_host_num'?: number;
    private 'system_vulnerability_num'?: number;
    public constructor() { 
        super();
    }
    public withAttackSuccessNum(attackSuccessNum: number): ShowEventAttackTagResponse {
        this['attack_success_num'] = attackSuccessNum;
        return this;
    }
    public set attackSuccessNum(attackSuccessNum: number  | undefined) {
        this['attack_success_num'] = attackSuccessNum;
    }
    public get attackSuccessNum(): number | undefined {
        return this['attack_success_num'];
    }
    public withAttackAttemptNum(attackAttemptNum: number): ShowEventAttackTagResponse {
        this['attack_attempt_num'] = attackAttemptNum;
        return this;
    }
    public set attackAttemptNum(attackAttemptNum: number  | undefined) {
        this['attack_attempt_num'] = attackAttemptNum;
    }
    public get attackAttemptNum(): number | undefined {
        return this['attack_attempt_num'];
    }
    public withAttackBlockedNum(attackBlockedNum: number): ShowEventAttackTagResponse {
        this['attack_blocked_num'] = attackBlockedNum;
        return this;
    }
    public set attackBlockedNum(attackBlockedNum: number  | undefined) {
        this['attack_blocked_num'] = attackBlockedNum;
    }
    public get attackBlockedNum(): number | undefined {
        return this['attack_blocked_num'];
    }
    public withAbnormalBehaviorNum(abnormalBehaviorNum: number): ShowEventAttackTagResponse {
        this['abnormal_behavior_num'] = abnormalBehaviorNum;
        return this;
    }
    public set abnormalBehaviorNum(abnormalBehaviorNum: number  | undefined) {
        this['abnormal_behavior_num'] = abnormalBehaviorNum;
    }
    public get abnormalBehaviorNum(): number | undefined {
        return this['abnormal_behavior_num'];
    }
    public withCollapsibleHostNum(collapsibleHostNum: number): ShowEventAttackTagResponse {
        this['collapsible_host_num'] = collapsibleHostNum;
        return this;
    }
    public set collapsibleHostNum(collapsibleHostNum: number  | undefined) {
        this['collapsible_host_num'] = collapsibleHostNum;
    }
    public get collapsibleHostNum(): number | undefined {
        return this['collapsible_host_num'];
    }
    public withSystemVulnerabilityNum(systemVulnerabilityNum: number): ShowEventAttackTagResponse {
        this['system_vulnerability_num'] = systemVulnerabilityNum;
        return this;
    }
    public set systemVulnerabilityNum(systemVulnerabilityNum: number  | undefined) {
        this['system_vulnerability_num'] = systemVulnerabilityNum;
    }
    public get systemVulnerabilityNum(): number | undefined {
        return this['system_vulnerability_num'];
    }
}