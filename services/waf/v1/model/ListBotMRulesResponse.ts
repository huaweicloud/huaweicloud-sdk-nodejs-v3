import { BotMBehaviorDetectionRule } from './BotMBehaviorDetectionRule';
import { BotMRule } from './BotMRule';
import { TrafficDetectionConditionDTO } from './TrafficDetectionConditionDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBotMRulesResponse extends SdkResponse {
    private 'policy_id'?: string;
    private 'tenant_id'?: string;
    private 'known_bot_detection'?: Array<BotMRule>;
    private 'transparent_detection'?: Array<BotMRule>;
    private 'behavior_detection'?: BotMBehaviorDetectionRule;
    private 'traffic_detection_conditions'?: Array<TrafficDetectionConditionDTO>;
    private 'interactive_detection'?: Array<BotMRule>;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): ListBotMRulesResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withTenantId(tenantId: string): ListBotMRulesResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withKnownBotDetection(knownBotDetection: Array<BotMRule>): ListBotMRulesResponse {
        this['known_bot_detection'] = knownBotDetection;
        return this;
    }
    public set knownBotDetection(knownBotDetection: Array<BotMRule>  | undefined) {
        this['known_bot_detection'] = knownBotDetection;
    }
    public get knownBotDetection(): Array<BotMRule> | undefined {
        return this['known_bot_detection'];
    }
    public withTransparentDetection(transparentDetection: Array<BotMRule>): ListBotMRulesResponse {
        this['transparent_detection'] = transparentDetection;
        return this;
    }
    public set transparentDetection(transparentDetection: Array<BotMRule>  | undefined) {
        this['transparent_detection'] = transparentDetection;
    }
    public get transparentDetection(): Array<BotMRule> | undefined {
        return this['transparent_detection'];
    }
    public withBehaviorDetection(behaviorDetection: BotMBehaviorDetectionRule): ListBotMRulesResponse {
        this['behavior_detection'] = behaviorDetection;
        return this;
    }
    public set behaviorDetection(behaviorDetection: BotMBehaviorDetectionRule  | undefined) {
        this['behavior_detection'] = behaviorDetection;
    }
    public get behaviorDetection(): BotMBehaviorDetectionRule | undefined {
        return this['behavior_detection'];
    }
    public withTrafficDetectionConditions(trafficDetectionConditions: Array<TrafficDetectionConditionDTO>): ListBotMRulesResponse {
        this['traffic_detection_conditions'] = trafficDetectionConditions;
        return this;
    }
    public set trafficDetectionConditions(trafficDetectionConditions: Array<TrafficDetectionConditionDTO>  | undefined) {
        this['traffic_detection_conditions'] = trafficDetectionConditions;
    }
    public get trafficDetectionConditions(): Array<TrafficDetectionConditionDTO> | undefined {
        return this['traffic_detection_conditions'];
    }
    public withInteractiveDetection(interactiveDetection: Array<BotMRule>): ListBotMRulesResponse {
        this['interactive_detection'] = interactiveDetection;
        return this;
    }
    public set interactiveDetection(interactiveDetection: Array<BotMRule>  | undefined) {
        this['interactive_detection'] = interactiveDetection;
    }
    public get interactiveDetection(): Array<BotMRule> | undefined {
        return this['interactive_detection'];
    }
}