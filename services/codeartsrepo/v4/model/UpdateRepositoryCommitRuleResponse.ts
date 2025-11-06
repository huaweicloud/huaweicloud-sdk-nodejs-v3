import { RepositoryUserBasicDto } from './RepositoryUserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepositoryCommitRuleResponse extends SdkResponse {
    public id?: number;
    private 'repository_id'?: number;
    private 'commit_message_regex'?: string;
    private 'commit_message_negative_regex'?: string;
    private 'prohibited_file_name_regex'?: string;
    private 'author_email_regex'?: string;
    private 'max_file_size'?: number;
    private 'allowed_max_file_size'?: number;
    private 'effective_date'?: string;
    private 'binary_gate_enabled'?: boolean;
    private 'privileged_users'?: Array<RepositoryUserBasicDto>;
    private 'allowed_modify_binary'?: boolean;
    private 'allowed_binary_file_name_regex'?: string;
    private 'author_regex'?: object;
    private 'updated_at'?: string;
    public name?: string;
    private 'branch_name'?: string;
    private 'created_at'?: string;
    private 'skip_rule_check'?: boolean;
    private 'skip_rule_end_date'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): UpdateRepositoryCommitRuleResponse {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryCommitRuleResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withCommitMessageRegex(commitMessageRegex: string): UpdateRepositoryCommitRuleResponse {
        this['commit_message_regex'] = commitMessageRegex;
        return this;
    }
    public set commitMessageRegex(commitMessageRegex: string  | undefined) {
        this['commit_message_regex'] = commitMessageRegex;
    }
    public get commitMessageRegex(): string | undefined {
        return this['commit_message_regex'];
    }
    public withCommitMessageNegativeRegex(commitMessageNegativeRegex: string): UpdateRepositoryCommitRuleResponse {
        this['commit_message_negative_regex'] = commitMessageNegativeRegex;
        return this;
    }
    public set commitMessageNegativeRegex(commitMessageNegativeRegex: string  | undefined) {
        this['commit_message_negative_regex'] = commitMessageNegativeRegex;
    }
    public get commitMessageNegativeRegex(): string | undefined {
        return this['commit_message_negative_regex'];
    }
    public withProhibitedFileNameRegex(prohibitedFileNameRegex: string): UpdateRepositoryCommitRuleResponse {
        this['prohibited_file_name_regex'] = prohibitedFileNameRegex;
        return this;
    }
    public set prohibitedFileNameRegex(prohibitedFileNameRegex: string  | undefined) {
        this['prohibited_file_name_regex'] = prohibitedFileNameRegex;
    }
    public get prohibitedFileNameRegex(): string | undefined {
        return this['prohibited_file_name_regex'];
    }
    public withAuthorEmailRegex(authorEmailRegex: string): UpdateRepositoryCommitRuleResponse {
        this['author_email_regex'] = authorEmailRegex;
        return this;
    }
    public set authorEmailRegex(authorEmailRegex: string  | undefined) {
        this['author_email_regex'] = authorEmailRegex;
    }
    public get authorEmailRegex(): string | undefined {
        return this['author_email_regex'];
    }
    public withMaxFileSize(maxFileSize: number): UpdateRepositoryCommitRuleResponse {
        this['max_file_size'] = maxFileSize;
        return this;
    }
    public set maxFileSize(maxFileSize: number  | undefined) {
        this['max_file_size'] = maxFileSize;
    }
    public get maxFileSize(): number | undefined {
        return this['max_file_size'];
    }
    public withAllowedMaxFileSize(allowedMaxFileSize: number): UpdateRepositoryCommitRuleResponse {
        this['allowed_max_file_size'] = allowedMaxFileSize;
        return this;
    }
    public set allowedMaxFileSize(allowedMaxFileSize: number  | undefined) {
        this['allowed_max_file_size'] = allowedMaxFileSize;
    }
    public get allowedMaxFileSize(): number | undefined {
        return this['allowed_max_file_size'];
    }
    public withEffectiveDate(effectiveDate: string): UpdateRepositoryCommitRuleResponse {
        this['effective_date'] = effectiveDate;
        return this;
    }
    public set effectiveDate(effectiveDate: string  | undefined) {
        this['effective_date'] = effectiveDate;
    }
    public get effectiveDate(): string | undefined {
        return this['effective_date'];
    }
    public withBinaryGateEnabled(binaryGateEnabled: boolean): UpdateRepositoryCommitRuleResponse {
        this['binary_gate_enabled'] = binaryGateEnabled;
        return this;
    }
    public set binaryGateEnabled(binaryGateEnabled: boolean  | undefined) {
        this['binary_gate_enabled'] = binaryGateEnabled;
    }
    public get binaryGateEnabled(): boolean | undefined {
        return this['binary_gate_enabled'];
    }
    public withPrivilegedUsers(privilegedUsers: Array<RepositoryUserBasicDto>): UpdateRepositoryCommitRuleResponse {
        this['privileged_users'] = privilegedUsers;
        return this;
    }
    public set privilegedUsers(privilegedUsers: Array<RepositoryUserBasicDto>  | undefined) {
        this['privileged_users'] = privilegedUsers;
    }
    public get privilegedUsers(): Array<RepositoryUserBasicDto> | undefined {
        return this['privileged_users'];
    }
    public withAllowedModifyBinary(allowedModifyBinary: boolean): UpdateRepositoryCommitRuleResponse {
        this['allowed_modify_binary'] = allowedModifyBinary;
        return this;
    }
    public set allowedModifyBinary(allowedModifyBinary: boolean  | undefined) {
        this['allowed_modify_binary'] = allowedModifyBinary;
    }
    public get allowedModifyBinary(): boolean | undefined {
        return this['allowed_modify_binary'];
    }
    public withAllowedBinaryFileNameRegex(allowedBinaryFileNameRegex: string): UpdateRepositoryCommitRuleResponse {
        this['allowed_binary_file_name_regex'] = allowedBinaryFileNameRegex;
        return this;
    }
    public set allowedBinaryFileNameRegex(allowedBinaryFileNameRegex: string  | undefined) {
        this['allowed_binary_file_name_regex'] = allowedBinaryFileNameRegex;
    }
    public get allowedBinaryFileNameRegex(): string | undefined {
        return this['allowed_binary_file_name_regex'];
    }
    public withAuthorRegex(authorRegex: object): UpdateRepositoryCommitRuleResponse {
        this['author_regex'] = authorRegex;
        return this;
    }
    public set authorRegex(authorRegex: object  | undefined) {
        this['author_regex'] = authorRegex;
    }
    public get authorRegex(): object | undefined {
        return this['author_regex'];
    }
    public withUpdatedAt(updatedAt: string): UpdateRepositoryCommitRuleResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withName(name: string): UpdateRepositoryCommitRuleResponse {
        this['name'] = name;
        return this;
    }
    public withBranchName(branchName: string): UpdateRepositoryCommitRuleResponse {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withCreatedAt(createdAt: string): UpdateRepositoryCommitRuleResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withSkipRuleCheck(skipRuleCheck: boolean): UpdateRepositoryCommitRuleResponse {
        this['skip_rule_check'] = skipRuleCheck;
        return this;
    }
    public set skipRuleCheck(skipRuleCheck: boolean  | undefined) {
        this['skip_rule_check'] = skipRuleCheck;
    }
    public get skipRuleCheck(): boolean | undefined {
        return this['skip_rule_check'];
    }
    public withSkipRuleEndDate(skipRuleEndDate: string): UpdateRepositoryCommitRuleResponse {
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