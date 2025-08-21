

export class GeneralPolicyBodyDto {
    private 'disable_fork'?: boolean;
    private 'generate_pre_merge_ref'?: boolean;
    private 'branch_name_regex'?: string;
    private 'tag_name_regex'?: string;
    private 'forbidden_developer_create_branch'?: boolean;
    private 'create_branch_whitelist_user_ids'?: string;
    public constructor() { 
    }
    public withDisableFork(disableFork: boolean): GeneralPolicyBodyDto {
        this['disable_fork'] = disableFork;
        return this;
    }
    public set disableFork(disableFork: boolean  | undefined) {
        this['disable_fork'] = disableFork;
    }
    public get disableFork(): boolean | undefined {
        return this['disable_fork'];
    }
    public withGeneratePreMergeRef(generatePreMergeRef: boolean): GeneralPolicyBodyDto {
        this['generate_pre_merge_ref'] = generatePreMergeRef;
        return this;
    }
    public set generatePreMergeRef(generatePreMergeRef: boolean  | undefined) {
        this['generate_pre_merge_ref'] = generatePreMergeRef;
    }
    public get generatePreMergeRef(): boolean | undefined {
        return this['generate_pre_merge_ref'];
    }
    public withBranchNameRegex(branchNameRegex: string): GeneralPolicyBodyDto {
        this['branch_name_regex'] = branchNameRegex;
        return this;
    }
    public set branchNameRegex(branchNameRegex: string  | undefined) {
        this['branch_name_regex'] = branchNameRegex;
    }
    public get branchNameRegex(): string | undefined {
        return this['branch_name_regex'];
    }
    public withTagNameRegex(tagNameRegex: string): GeneralPolicyBodyDto {
        this['tag_name_regex'] = tagNameRegex;
        return this;
    }
    public set tagNameRegex(tagNameRegex: string  | undefined) {
        this['tag_name_regex'] = tagNameRegex;
    }
    public get tagNameRegex(): string | undefined {
        return this['tag_name_regex'];
    }
    public withForbiddenDeveloperCreateBranch(forbiddenDeveloperCreateBranch: boolean): GeneralPolicyBodyDto {
        this['forbidden_developer_create_branch'] = forbiddenDeveloperCreateBranch;
        return this;
    }
    public set forbiddenDeveloperCreateBranch(forbiddenDeveloperCreateBranch: boolean  | undefined) {
        this['forbidden_developer_create_branch'] = forbiddenDeveloperCreateBranch;
    }
    public get forbiddenDeveloperCreateBranch(): boolean | undefined {
        return this['forbidden_developer_create_branch'];
    }
    public withCreateBranchWhitelistUserIds(createBranchWhitelistUserIds: string): GeneralPolicyBodyDto {
        this['create_branch_whitelist_user_ids'] = createBranchWhitelistUserIds;
        return this;
    }
    public set createBranchWhitelistUserIds(createBranchWhitelistUserIds: string  | undefined) {
        this['create_branch_whitelist_user_ids'] = createBranchWhitelistUserIds;
    }
    public get createBranchWhitelistUserIds(): string | undefined {
        return this['create_branch_whitelist_user_ids'];
    }
}