

export class CommitRuleCreateBodyDto {
    public name?: string;
    private 'branch_name'?: string;
    private 'commit_message_regex'?: string;
    private 'commit_message_negative_regex'?: string;
    private 'author_regex'?: string;
    private 'author_email_regex'?: string;
    private 'prohibited_file_name_regex'?: string;
    private 'max_file_size'?: number;
    private 'binary_gate_enabled'?: boolean;
    private 'allowed_modify_binary'?: boolean;
    private 'allowed_binary_file_name_regex'?: string;
    private 'privileged_user_ids'?: Array<number>;
    private 'effective_date'?: string;
    private 'skip_rule_check'?: boolean;
    private 'skip_rule_end_date'?: string;
    public constructor(name?: string, branchName?: string) { 
        this['name'] = name;
        this['branch_name'] = branchName;
    }
    public withName(name: string): CommitRuleCreateBodyDto {
        this['name'] = name;
        return this;
    }
    public withBranchName(branchName: string): CommitRuleCreateBodyDto {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withCommitMessageRegex(commitMessageRegex: string): CommitRuleCreateBodyDto {
        this['commit_message_regex'] = commitMessageRegex;
        return this;
    }
    public set commitMessageRegex(commitMessageRegex: string  | undefined) {
        this['commit_message_regex'] = commitMessageRegex;
    }
    public get commitMessageRegex(): string | undefined {
        return this['commit_message_regex'];
    }
    public withCommitMessageNegativeRegex(commitMessageNegativeRegex: string): CommitRuleCreateBodyDto {
        this['commit_message_negative_regex'] = commitMessageNegativeRegex;
        return this;
    }
    public set commitMessageNegativeRegex(commitMessageNegativeRegex: string  | undefined) {
        this['commit_message_negative_regex'] = commitMessageNegativeRegex;
    }
    public get commitMessageNegativeRegex(): string | undefined {
        return this['commit_message_negative_regex'];
    }
    public withAuthorRegex(authorRegex: string): CommitRuleCreateBodyDto {
        this['author_regex'] = authorRegex;
        return this;
    }
    public set authorRegex(authorRegex: string  | undefined) {
        this['author_regex'] = authorRegex;
    }
    public get authorRegex(): string | undefined {
        return this['author_regex'];
    }
    public withAuthorEmailRegex(authorEmailRegex: string): CommitRuleCreateBodyDto {
        this['author_email_regex'] = authorEmailRegex;
        return this;
    }
    public set authorEmailRegex(authorEmailRegex: string  | undefined) {
        this['author_email_regex'] = authorEmailRegex;
    }
    public get authorEmailRegex(): string | undefined {
        return this['author_email_regex'];
    }
    public withProhibitedFileNameRegex(prohibitedFileNameRegex: string): CommitRuleCreateBodyDto {
        this['prohibited_file_name_regex'] = prohibitedFileNameRegex;
        return this;
    }
    public set prohibitedFileNameRegex(prohibitedFileNameRegex: string  | undefined) {
        this['prohibited_file_name_regex'] = prohibitedFileNameRegex;
    }
    public get prohibitedFileNameRegex(): string | undefined {
        return this['prohibited_file_name_regex'];
    }
    public withMaxFileSize(maxFileSize: number): CommitRuleCreateBodyDto {
        this['max_file_size'] = maxFileSize;
        return this;
    }
    public set maxFileSize(maxFileSize: number  | undefined) {
        this['max_file_size'] = maxFileSize;
    }
    public get maxFileSize(): number | undefined {
        return this['max_file_size'];
    }
    public withBinaryGateEnabled(binaryGateEnabled: boolean): CommitRuleCreateBodyDto {
        this['binary_gate_enabled'] = binaryGateEnabled;
        return this;
    }
    public set binaryGateEnabled(binaryGateEnabled: boolean  | undefined) {
        this['binary_gate_enabled'] = binaryGateEnabled;
    }
    public get binaryGateEnabled(): boolean | undefined {
        return this['binary_gate_enabled'];
    }
    public withAllowedModifyBinary(allowedModifyBinary: boolean): CommitRuleCreateBodyDto {
        this['allowed_modify_binary'] = allowedModifyBinary;
        return this;
    }
    public set allowedModifyBinary(allowedModifyBinary: boolean  | undefined) {
        this['allowed_modify_binary'] = allowedModifyBinary;
    }
    public get allowedModifyBinary(): boolean | undefined {
        return this['allowed_modify_binary'];
    }
    public withAllowedBinaryFileNameRegex(allowedBinaryFileNameRegex: string): CommitRuleCreateBodyDto {
        this['allowed_binary_file_name_regex'] = allowedBinaryFileNameRegex;
        return this;
    }
    public set allowedBinaryFileNameRegex(allowedBinaryFileNameRegex: string  | undefined) {
        this['allowed_binary_file_name_regex'] = allowedBinaryFileNameRegex;
    }
    public get allowedBinaryFileNameRegex(): string | undefined {
        return this['allowed_binary_file_name_regex'];
    }
    public withPrivilegedUserIds(privilegedUserIds: Array<number>): CommitRuleCreateBodyDto {
        this['privileged_user_ids'] = privilegedUserIds;
        return this;
    }
    public set privilegedUserIds(privilegedUserIds: Array<number>  | undefined) {
        this['privileged_user_ids'] = privilegedUserIds;
    }
    public get privilegedUserIds(): Array<number> | undefined {
        return this['privileged_user_ids'];
    }
    public withEffectiveDate(effectiveDate: string): CommitRuleCreateBodyDto {
        this['effective_date'] = effectiveDate;
        return this;
    }
    public set effectiveDate(effectiveDate: string  | undefined) {
        this['effective_date'] = effectiveDate;
    }
    public get effectiveDate(): string | undefined {
        return this['effective_date'];
    }
    public withSkipRuleCheck(skipRuleCheck: boolean): CommitRuleCreateBodyDto {
        this['skip_rule_check'] = skipRuleCheck;
        return this;
    }
    public set skipRuleCheck(skipRuleCheck: boolean  | undefined) {
        this['skip_rule_check'] = skipRuleCheck;
    }
    public get skipRuleCheck(): boolean | undefined {
        return this['skip_rule_check'];
    }
    public withSkipRuleEndDate(skipRuleEndDate: string): CommitRuleCreateBodyDto {
        this['skip_rule_end_date'] = skipRuleEndDate;
        return this;
    }
    public set skipRuleEndDate(skipRuleEndDate: string  | undefined) {
        this['skip_rule_end_date'] = skipRuleEndDate;
    }
    public get skipRuleEndDate(): string | undefined {
        return this['skip_rule_end_date'];
    }
}