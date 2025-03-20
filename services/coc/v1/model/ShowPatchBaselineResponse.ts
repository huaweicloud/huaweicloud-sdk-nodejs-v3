import { CustomBaselineRule } from './CustomBaselineRule';
import { PatchRule } from './PatchRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPatchBaselineResponse extends SdkResponse {
    private 'baseline_id'?: string;
    public name?: string;
    public description?: string;
    public region?: string;
    private 'baseline_scene'?: string;
    private 'rule_type'?: string;
    private 'operating_system'?: string;
    public type?: string;
    private 'approval_rules'?: Array<PatchRule>;
    private 'custom_baseline_rules'?: Array<CustomBaselineRule>;
    private 'default_patch_baseline'?: boolean;
    private 'rejected_patches'?: string;
    private 'rejected_action'?: string;
    private 'approved_patches'?: string;
    private 'approved_compliance'?: string;
    private 'enable_security_approved'?: boolean;
    private 'created_time'?: number;
    private 'modified_time'?: number;
    public constructor() { 
        super();
    }
    public withBaselineId(baselineId: string): ShowPatchBaselineResponse {
        this['baseline_id'] = baselineId;
        return this;
    }
    public set baselineId(baselineId: string  | undefined) {
        this['baseline_id'] = baselineId;
    }
    public get baselineId(): string | undefined {
        return this['baseline_id'];
    }
    public withName(name: string): ShowPatchBaselineResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowPatchBaselineResponse {
        this['description'] = description;
        return this;
    }
    public withRegion(region: string): ShowPatchBaselineResponse {
        this['region'] = region;
        return this;
    }
    public withBaselineScene(baselineScene: string): ShowPatchBaselineResponse {
        this['baseline_scene'] = baselineScene;
        return this;
    }
    public set baselineScene(baselineScene: string  | undefined) {
        this['baseline_scene'] = baselineScene;
    }
    public get baselineScene(): string | undefined {
        return this['baseline_scene'];
    }
    public withRuleType(ruleType: string): ShowPatchBaselineResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withOperatingSystem(operatingSystem: string): ShowPatchBaselineResponse {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
    public withType(type: string): ShowPatchBaselineResponse {
        this['type'] = type;
        return this;
    }
    public withApprovalRules(approvalRules: Array<PatchRule>): ShowPatchBaselineResponse {
        this['approval_rules'] = approvalRules;
        return this;
    }
    public set approvalRules(approvalRules: Array<PatchRule>  | undefined) {
        this['approval_rules'] = approvalRules;
    }
    public get approvalRules(): Array<PatchRule> | undefined {
        return this['approval_rules'];
    }
    public withCustomBaselineRules(customBaselineRules: Array<CustomBaselineRule>): ShowPatchBaselineResponse {
        this['custom_baseline_rules'] = customBaselineRules;
        return this;
    }
    public set customBaselineRules(customBaselineRules: Array<CustomBaselineRule>  | undefined) {
        this['custom_baseline_rules'] = customBaselineRules;
    }
    public get customBaselineRules(): Array<CustomBaselineRule> | undefined {
        return this['custom_baseline_rules'];
    }
    public withDefaultPatchBaseline(defaultPatchBaseline: boolean): ShowPatchBaselineResponse {
        this['default_patch_baseline'] = defaultPatchBaseline;
        return this;
    }
    public set defaultPatchBaseline(defaultPatchBaseline: boolean  | undefined) {
        this['default_patch_baseline'] = defaultPatchBaseline;
    }
    public get defaultPatchBaseline(): boolean | undefined {
        return this['default_patch_baseline'];
    }
    public withRejectedPatches(rejectedPatches: string): ShowPatchBaselineResponse {
        this['rejected_patches'] = rejectedPatches;
        return this;
    }
    public set rejectedPatches(rejectedPatches: string  | undefined) {
        this['rejected_patches'] = rejectedPatches;
    }
    public get rejectedPatches(): string | undefined {
        return this['rejected_patches'];
    }
    public withRejectedAction(rejectedAction: string): ShowPatchBaselineResponse {
        this['rejected_action'] = rejectedAction;
        return this;
    }
    public set rejectedAction(rejectedAction: string  | undefined) {
        this['rejected_action'] = rejectedAction;
    }
    public get rejectedAction(): string | undefined {
        return this['rejected_action'];
    }
    public withApprovedPatches(approvedPatches: string): ShowPatchBaselineResponse {
        this['approved_patches'] = approvedPatches;
        return this;
    }
    public set approvedPatches(approvedPatches: string  | undefined) {
        this['approved_patches'] = approvedPatches;
    }
    public get approvedPatches(): string | undefined {
        return this['approved_patches'];
    }
    public withApprovedCompliance(approvedCompliance: string): ShowPatchBaselineResponse {
        this['approved_compliance'] = approvedCompliance;
        return this;
    }
    public set approvedCompliance(approvedCompliance: string  | undefined) {
        this['approved_compliance'] = approvedCompliance;
    }
    public get approvedCompliance(): string | undefined {
        return this['approved_compliance'];
    }
    public withEnableSecurityApproved(enableSecurityApproved: boolean): ShowPatchBaselineResponse {
        this['enable_security_approved'] = enableSecurityApproved;
        return this;
    }
    public set enableSecurityApproved(enableSecurityApproved: boolean  | undefined) {
        this['enable_security_approved'] = enableSecurityApproved;
    }
    public get enableSecurityApproved(): boolean | undefined {
        return this['enable_security_approved'];
    }
    public withCreatedTime(createdTime: number): ShowPatchBaselineResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withModifiedTime(modifiedTime: number): ShowPatchBaselineResponse {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: number  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): number | undefined {
        return this['modified_time'];
    }
}