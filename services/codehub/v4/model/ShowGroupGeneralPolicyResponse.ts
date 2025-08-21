
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupGeneralPolicyResponse extends SdkResponse {
    private 'disable_fork'?: boolean;
    private 'forbidden_developer_create_branch'?: boolean;
    private 'forbidden_developer_create_tag'?: boolean;
    private 'forbidden_committer_create_branch'?: boolean;
    private 'branch_name_regex'?: string;
    private 'tag_name_regex'?: string;
    private 'generate_pre_merge_ref'?: boolean;
    private 'forbidden_gitlab_access'?: boolean;
    private 'rebase_disable_trigger_webhook'?: boolean;
    private 'open_gpg_verified'?: boolean;
    public constructor() { 
        super();
    }
    public withDisableFork(disableFork: boolean): ShowGroupGeneralPolicyResponse {
        this['disable_fork'] = disableFork;
        return this;
    }
    public set disableFork(disableFork: boolean  | undefined) {
        this['disable_fork'] = disableFork;
    }
    public get disableFork(): boolean | undefined {
        return this['disable_fork'];
    }
    public withForbiddenDeveloperCreateBranch(forbiddenDeveloperCreateBranch: boolean): ShowGroupGeneralPolicyResponse {
        this['forbidden_developer_create_branch'] = forbiddenDeveloperCreateBranch;
        return this;
    }
    public set forbiddenDeveloperCreateBranch(forbiddenDeveloperCreateBranch: boolean  | undefined) {
        this['forbidden_developer_create_branch'] = forbiddenDeveloperCreateBranch;
    }
    public get forbiddenDeveloperCreateBranch(): boolean | undefined {
        return this['forbidden_developer_create_branch'];
    }
    public withForbiddenDeveloperCreateTag(forbiddenDeveloperCreateTag: boolean): ShowGroupGeneralPolicyResponse {
        this['forbidden_developer_create_tag'] = forbiddenDeveloperCreateTag;
        return this;
    }
    public set forbiddenDeveloperCreateTag(forbiddenDeveloperCreateTag: boolean  | undefined) {
        this['forbidden_developer_create_tag'] = forbiddenDeveloperCreateTag;
    }
    public get forbiddenDeveloperCreateTag(): boolean | undefined {
        return this['forbidden_developer_create_tag'];
    }
    public withForbiddenCommitterCreateBranch(forbiddenCommitterCreateBranch: boolean): ShowGroupGeneralPolicyResponse {
        this['forbidden_committer_create_branch'] = forbiddenCommitterCreateBranch;
        return this;
    }
    public set forbiddenCommitterCreateBranch(forbiddenCommitterCreateBranch: boolean  | undefined) {
        this['forbidden_committer_create_branch'] = forbiddenCommitterCreateBranch;
    }
    public get forbiddenCommitterCreateBranch(): boolean | undefined {
        return this['forbidden_committer_create_branch'];
    }
    public withBranchNameRegex(branchNameRegex: string): ShowGroupGeneralPolicyResponse {
        this['branch_name_regex'] = branchNameRegex;
        return this;
    }
    public set branchNameRegex(branchNameRegex: string  | undefined) {
        this['branch_name_regex'] = branchNameRegex;
    }
    public get branchNameRegex(): string | undefined {
        return this['branch_name_regex'];
    }
    public withTagNameRegex(tagNameRegex: string): ShowGroupGeneralPolicyResponse {
        this['tag_name_regex'] = tagNameRegex;
        return this;
    }
    public set tagNameRegex(tagNameRegex: string  | undefined) {
        this['tag_name_regex'] = tagNameRegex;
    }
    public get tagNameRegex(): string | undefined {
        return this['tag_name_regex'];
    }
    public withGeneratePreMergeRef(generatePreMergeRef: boolean): ShowGroupGeneralPolicyResponse {
        this['generate_pre_merge_ref'] = generatePreMergeRef;
        return this;
    }
    public set generatePreMergeRef(generatePreMergeRef: boolean  | undefined) {
        this['generate_pre_merge_ref'] = generatePreMergeRef;
    }
    public get generatePreMergeRef(): boolean | undefined {
        return this['generate_pre_merge_ref'];
    }
    public withForbiddenGitlabAccess(forbiddenGitlabAccess: boolean): ShowGroupGeneralPolicyResponse {
        this['forbidden_gitlab_access'] = forbiddenGitlabAccess;
        return this;
    }
    public set forbiddenGitlabAccess(forbiddenGitlabAccess: boolean  | undefined) {
        this['forbidden_gitlab_access'] = forbiddenGitlabAccess;
    }
    public get forbiddenGitlabAccess(): boolean | undefined {
        return this['forbidden_gitlab_access'];
    }
    public withRebaseDisableTriggerWebhook(rebaseDisableTriggerWebhook: boolean): ShowGroupGeneralPolicyResponse {
        this['rebase_disable_trigger_webhook'] = rebaseDisableTriggerWebhook;
        return this;
    }
    public set rebaseDisableTriggerWebhook(rebaseDisableTriggerWebhook: boolean  | undefined) {
        this['rebase_disable_trigger_webhook'] = rebaseDisableTriggerWebhook;
    }
    public get rebaseDisableTriggerWebhook(): boolean | undefined {
        return this['rebase_disable_trigger_webhook'];
    }
    public withOpenGpgVerified(openGpgVerified: boolean): ShowGroupGeneralPolicyResponse {
        this['open_gpg_verified'] = openGpgVerified;
        return this;
    }
    public set openGpgVerified(openGpgVerified: boolean  | undefined) {
        this['open_gpg_verified'] = openGpgVerified;
    }
    public get openGpgVerified(): boolean | undefined {
        return this['open_gpg_verified'];
    }
}