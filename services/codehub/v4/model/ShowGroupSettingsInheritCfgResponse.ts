
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupSettingsInheritCfgResponse extends SdkResponse {
    private 'can_update'?: boolean;
    public id?: number;
    private 'product_id'?: string;
    private 'namespace_id'?: number;
    private 'parent_id'?: number;
    public ownership?: number;
    public pbi?: number;
    private 'protected_branches'?: number;
    private 'protected_tags'?: number;
    private 'push_rules'?: number;
    private 'change_requests'?: number;
    private 'custom_ctrl_items'?: number;
    public reviews?: number;
    public issues?: number;
    private 'cr_evaluation'?: number;
    private 'e2e_settings'?: number;
    private 'committer_settings'?: number;
    private 'webhook_settings'?: number;
    private 'stream_event_settings'?: number;
    private 'pipeline_settings'?: number;
    private 'issue_templates'?: number;
    private 'cr_comment_emplates'?: number;
    private 'merge_requests'?: number;
    private 'mr_branch_policies'?: number;
    private 'repository_settings'?: number;
    private 'deploy_keys'?: number;
    public watermark?: number;
    private 'created_at'?: string;
    private 'update_at'?: string;
    public constructor() { 
        super();
    }
    public withCanUpdate(canUpdate: boolean): ShowGroupSettingsInheritCfgResponse {
        this['can_update'] = canUpdate;
        return this;
    }
    public set canUpdate(canUpdate: boolean  | undefined) {
        this['can_update'] = canUpdate;
    }
    public get canUpdate(): boolean | undefined {
        return this['can_update'];
    }
    public withId(id: number): ShowGroupSettingsInheritCfgResponse {
        this['id'] = id;
        return this;
    }
    public withProductId(productId: string): ShowGroupSettingsInheritCfgResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withNamespaceId(namespaceId: number): ShowGroupSettingsInheritCfgResponse {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withParentId(parentId: number): ShowGroupSettingsInheritCfgResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withOwnership(ownership: number): ShowGroupSettingsInheritCfgResponse {
        this['ownership'] = ownership;
        return this;
    }
    public withPbi(pbi: number): ShowGroupSettingsInheritCfgResponse {
        this['pbi'] = pbi;
        return this;
    }
    public withProtectedBranches(protectedBranches: number): ShowGroupSettingsInheritCfgResponse {
        this['protected_branches'] = protectedBranches;
        return this;
    }
    public set protectedBranches(protectedBranches: number  | undefined) {
        this['protected_branches'] = protectedBranches;
    }
    public get protectedBranches(): number | undefined {
        return this['protected_branches'];
    }
    public withProtectedTags(protectedTags: number): ShowGroupSettingsInheritCfgResponse {
        this['protected_tags'] = protectedTags;
        return this;
    }
    public set protectedTags(protectedTags: number  | undefined) {
        this['protected_tags'] = protectedTags;
    }
    public get protectedTags(): number | undefined {
        return this['protected_tags'];
    }
    public withPushRules(pushRules: number): ShowGroupSettingsInheritCfgResponse {
        this['push_rules'] = pushRules;
        return this;
    }
    public set pushRules(pushRules: number  | undefined) {
        this['push_rules'] = pushRules;
    }
    public get pushRules(): number | undefined {
        return this['push_rules'];
    }
    public withChangeRequests(changeRequests: number): ShowGroupSettingsInheritCfgResponse {
        this['change_requests'] = changeRequests;
        return this;
    }
    public set changeRequests(changeRequests: number  | undefined) {
        this['change_requests'] = changeRequests;
    }
    public get changeRequests(): number | undefined {
        return this['change_requests'];
    }
    public withCustomCtrlItems(customCtrlItems: number): ShowGroupSettingsInheritCfgResponse {
        this['custom_ctrl_items'] = customCtrlItems;
        return this;
    }
    public set customCtrlItems(customCtrlItems: number  | undefined) {
        this['custom_ctrl_items'] = customCtrlItems;
    }
    public get customCtrlItems(): number | undefined {
        return this['custom_ctrl_items'];
    }
    public withReviews(reviews: number): ShowGroupSettingsInheritCfgResponse {
        this['reviews'] = reviews;
        return this;
    }
    public withIssues(issues: number): ShowGroupSettingsInheritCfgResponse {
        this['issues'] = issues;
        return this;
    }
    public withCrEvaluation(crEvaluation: number): ShowGroupSettingsInheritCfgResponse {
        this['cr_evaluation'] = crEvaluation;
        return this;
    }
    public set crEvaluation(crEvaluation: number  | undefined) {
        this['cr_evaluation'] = crEvaluation;
    }
    public get crEvaluation(): number | undefined {
        return this['cr_evaluation'];
    }
    public withE2eSettings(e2eSettings: number): ShowGroupSettingsInheritCfgResponse {
        this['e2e_settings'] = e2eSettings;
        return this;
    }
    public set e2eSettings(e2eSettings: number  | undefined) {
        this['e2e_settings'] = e2eSettings;
    }
    public get e2eSettings(): number | undefined {
        return this['e2e_settings'];
    }
    public withCommitterSettings(committerSettings: number): ShowGroupSettingsInheritCfgResponse {
        this['committer_settings'] = committerSettings;
        return this;
    }
    public set committerSettings(committerSettings: number  | undefined) {
        this['committer_settings'] = committerSettings;
    }
    public get committerSettings(): number | undefined {
        return this['committer_settings'];
    }
    public withWebhookSettings(webhookSettings: number): ShowGroupSettingsInheritCfgResponse {
        this['webhook_settings'] = webhookSettings;
        return this;
    }
    public set webhookSettings(webhookSettings: number  | undefined) {
        this['webhook_settings'] = webhookSettings;
    }
    public get webhookSettings(): number | undefined {
        return this['webhook_settings'];
    }
    public withStreamEventSettings(streamEventSettings: number): ShowGroupSettingsInheritCfgResponse {
        this['stream_event_settings'] = streamEventSettings;
        return this;
    }
    public set streamEventSettings(streamEventSettings: number  | undefined) {
        this['stream_event_settings'] = streamEventSettings;
    }
    public get streamEventSettings(): number | undefined {
        return this['stream_event_settings'];
    }
    public withPipelineSettings(pipelineSettings: number): ShowGroupSettingsInheritCfgResponse {
        this['pipeline_settings'] = pipelineSettings;
        return this;
    }
    public set pipelineSettings(pipelineSettings: number  | undefined) {
        this['pipeline_settings'] = pipelineSettings;
    }
    public get pipelineSettings(): number | undefined {
        return this['pipeline_settings'];
    }
    public withIssueTemplates(issueTemplates: number): ShowGroupSettingsInheritCfgResponse {
        this['issue_templates'] = issueTemplates;
        return this;
    }
    public set issueTemplates(issueTemplates: number  | undefined) {
        this['issue_templates'] = issueTemplates;
    }
    public get issueTemplates(): number | undefined {
        return this['issue_templates'];
    }
    public withCrCommentEmplates(crCommentEmplates: number): ShowGroupSettingsInheritCfgResponse {
        this['cr_comment_emplates'] = crCommentEmplates;
        return this;
    }
    public set crCommentEmplates(crCommentEmplates: number  | undefined) {
        this['cr_comment_emplates'] = crCommentEmplates;
    }
    public get crCommentEmplates(): number | undefined {
        return this['cr_comment_emplates'];
    }
    public withMergeRequests(mergeRequests: number): ShowGroupSettingsInheritCfgResponse {
        this['merge_requests'] = mergeRequests;
        return this;
    }
    public set mergeRequests(mergeRequests: number  | undefined) {
        this['merge_requests'] = mergeRequests;
    }
    public get mergeRequests(): number | undefined {
        return this['merge_requests'];
    }
    public withMrBranchPolicies(mrBranchPolicies: number): ShowGroupSettingsInheritCfgResponse {
        this['mr_branch_policies'] = mrBranchPolicies;
        return this;
    }
    public set mrBranchPolicies(mrBranchPolicies: number  | undefined) {
        this['mr_branch_policies'] = mrBranchPolicies;
    }
    public get mrBranchPolicies(): number | undefined {
        return this['mr_branch_policies'];
    }
    public withRepositorySettings(repositorySettings: number): ShowGroupSettingsInheritCfgResponse {
        this['repository_settings'] = repositorySettings;
        return this;
    }
    public set repositorySettings(repositorySettings: number  | undefined) {
        this['repository_settings'] = repositorySettings;
    }
    public get repositorySettings(): number | undefined {
        return this['repository_settings'];
    }
    public withDeployKeys(deployKeys: number): ShowGroupSettingsInheritCfgResponse {
        this['deploy_keys'] = deployKeys;
        return this;
    }
    public set deployKeys(deployKeys: number  | undefined) {
        this['deploy_keys'] = deployKeys;
    }
    public get deployKeys(): number | undefined {
        return this['deploy_keys'];
    }
    public withWatermark(watermark: number): ShowGroupSettingsInheritCfgResponse {
        this['watermark'] = watermark;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowGroupSettingsInheritCfgResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdateAt(updateAt: string): ShowGroupSettingsInheritCfgResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
}