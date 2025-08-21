import { PushRuleDevelopersDto } from './PushRuleDevelopersDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepositoryGeneralPolicyResponse extends SdkResponse {
    private 'disable_fork'?: boolean;
    private 'generate_pre_merge_ref'?: boolean;
    private 'branch_name_regex'?: string;
    private 'tag_name_regex'?: string;
    private 'forbidden_developer_create_branch'?: boolean;
    private 'create_branch_whitelist_users'?: Array<PushRuleDevelopersDto>;
    public constructor() { 
        super();
    }
    public withDisableFork(disableFork: boolean): UpdateRepositoryGeneralPolicyResponse {
        this['disable_fork'] = disableFork;
        return this;
    }
    public set disableFork(disableFork: boolean  | undefined) {
        this['disable_fork'] = disableFork;
    }
    public get disableFork(): boolean | undefined {
        return this['disable_fork'];
    }
    public withGeneratePreMergeRef(generatePreMergeRef: boolean): UpdateRepositoryGeneralPolicyResponse {
        this['generate_pre_merge_ref'] = generatePreMergeRef;
        return this;
    }
    public set generatePreMergeRef(generatePreMergeRef: boolean  | undefined) {
        this['generate_pre_merge_ref'] = generatePreMergeRef;
    }
    public get generatePreMergeRef(): boolean | undefined {
        return this['generate_pre_merge_ref'];
    }
    public withBranchNameRegex(branchNameRegex: string): UpdateRepositoryGeneralPolicyResponse {
        this['branch_name_regex'] = branchNameRegex;
        return this;
    }
    public set branchNameRegex(branchNameRegex: string  | undefined) {
        this['branch_name_regex'] = branchNameRegex;
    }
    public get branchNameRegex(): string | undefined {
        return this['branch_name_regex'];
    }
    public withTagNameRegex(tagNameRegex: string): UpdateRepositoryGeneralPolicyResponse {
        this['tag_name_regex'] = tagNameRegex;
        return this;
    }
    public set tagNameRegex(tagNameRegex: string  | undefined) {
        this['tag_name_regex'] = tagNameRegex;
    }
    public get tagNameRegex(): string | undefined {
        return this['tag_name_regex'];
    }
    public withForbiddenDeveloperCreateBranch(forbiddenDeveloperCreateBranch: boolean): UpdateRepositoryGeneralPolicyResponse {
        this['forbidden_developer_create_branch'] = forbiddenDeveloperCreateBranch;
        return this;
    }
    public set forbiddenDeveloperCreateBranch(forbiddenDeveloperCreateBranch: boolean  | undefined) {
        this['forbidden_developer_create_branch'] = forbiddenDeveloperCreateBranch;
    }
    public get forbiddenDeveloperCreateBranch(): boolean | undefined {
        return this['forbidden_developer_create_branch'];
    }
    public withCreateBranchWhitelistUsers(createBranchWhitelistUsers: Array<PushRuleDevelopersDto>): UpdateRepositoryGeneralPolicyResponse {
        this['create_branch_whitelist_users'] = createBranchWhitelistUsers;
        return this;
    }
    public set createBranchWhitelistUsers(createBranchWhitelistUsers: Array<PushRuleDevelopersDto>  | undefined) {
        this['create_branch_whitelist_users'] = createBranchWhitelistUsers;
    }
    public get createBranchWhitelistUsers(): Array<PushRuleDevelopersDto> | undefined {
        return this['create_branch_whitelist_users'];
    }
}