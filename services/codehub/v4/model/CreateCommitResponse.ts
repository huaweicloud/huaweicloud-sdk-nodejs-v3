import { CommitDto } from './CommitDto';
import { CommitStatsDto } from './CommitStatsDto';
import { PipelineBasicDto } from './PipelineBasicDto';
import { RelatedCommitSimpleDto } from './RelatedCommitSimpleDto';
import { SimpleDiffDto } from './SimpleDiffDto';
import { SimpleMergeRequestDetailDto } from './SimpleMergeRequestDetailDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCommitResponse extends SdkResponse {
    public id?: string;
    public message?: string;
    private 'parent_ids'?: Array<string>;
    private 'authored_date'?: string;
    private 'author_name'?: string;
    private 'author_email'?: string;
    private 'committed_date'?: string;
    private 'committer_name'?: string;
    private 'committer_email'?: string;
    private 'open_gpg_verified'?: boolean;
    private 'verification_status'?: number;
    private 'gpg_primary_key_id'?: string;
    public name?: string;
    private 'gpg_nick_name'?: string;
    private 'gpg_tenant_name'?: string;
    private 'gpg_user_name'?: string;
    private 'short_id'?: string;
    private 'created_at'?: string;
    public title?: string;
    private 'author_avatar_url'?: string;
    private 'committer_avatar_url'?: string;
    private 'relate_url'?: Array<RelatedCommitSimpleDto>;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    private 'user_name'?: string;
    public stats?: CommitStatsDto;
    public status?: CreateCommitResponseStatusEnum | string;
    private 'last_pipeline'?: PipelineBasicDto;
    private 'project_id'?: number;
    private 'merge_request'?: SimpleMergeRequestDetailDto;
    private 'code_changes'?: Array<SimpleDiffDto>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateCommitResponse {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): CreateCommitResponse {
        this['message'] = message;
        return this;
    }
    public withParentIds(parentIds: Array<string>): CreateCommitResponse {
        this['parent_ids'] = parentIds;
        return this;
    }
    public set parentIds(parentIds: Array<string>  | undefined) {
        this['parent_ids'] = parentIds;
    }
    public get parentIds(): Array<string> | undefined {
        return this['parent_ids'];
    }
    public withAuthoredDate(authoredDate: string): CreateCommitResponse {
        this['authored_date'] = authoredDate;
        return this;
    }
    public set authoredDate(authoredDate: string  | undefined) {
        this['authored_date'] = authoredDate;
    }
    public get authoredDate(): string | undefined {
        return this['authored_date'];
    }
    public withAuthorName(authorName: string): CreateCommitResponse {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withAuthorEmail(authorEmail: string): CreateCommitResponse {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withCommittedDate(committedDate: string): CreateCommitResponse {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: string  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): string | undefined {
        return this['committed_date'];
    }
    public withCommitterName(committerName: string): CreateCommitResponse {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withCommitterEmail(committerEmail: string): CreateCommitResponse {
        this['committer_email'] = committerEmail;
        return this;
    }
    public set committerEmail(committerEmail: string  | undefined) {
        this['committer_email'] = committerEmail;
    }
    public get committerEmail(): string | undefined {
        return this['committer_email'];
    }
    public withOpenGpgVerified(openGpgVerified: boolean): CreateCommitResponse {
        this['open_gpg_verified'] = openGpgVerified;
        return this;
    }
    public set openGpgVerified(openGpgVerified: boolean  | undefined) {
        this['open_gpg_verified'] = openGpgVerified;
    }
    public get openGpgVerified(): boolean | undefined {
        return this['open_gpg_verified'];
    }
    public withVerificationStatus(verificationStatus: number): CreateCommitResponse {
        this['verification_status'] = verificationStatus;
        return this;
    }
    public set verificationStatus(verificationStatus: number  | undefined) {
        this['verification_status'] = verificationStatus;
    }
    public get verificationStatus(): number | undefined {
        return this['verification_status'];
    }
    public withGpgPrimaryKeyId(gpgPrimaryKeyId: string): CreateCommitResponse {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
        return this;
    }
    public set gpgPrimaryKeyId(gpgPrimaryKeyId: string  | undefined) {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
    }
    public get gpgPrimaryKeyId(): string | undefined {
        return this['gpg_primary_key_id'];
    }
    public withName(name: string): CreateCommitResponse {
        this['name'] = name;
        return this;
    }
    public withGpgNickName(gpgNickName: string): CreateCommitResponse {
        this['gpg_nick_name'] = gpgNickName;
        return this;
    }
    public set gpgNickName(gpgNickName: string  | undefined) {
        this['gpg_nick_name'] = gpgNickName;
    }
    public get gpgNickName(): string | undefined {
        return this['gpg_nick_name'];
    }
    public withGpgTenantName(gpgTenantName: string): CreateCommitResponse {
        this['gpg_tenant_name'] = gpgTenantName;
        return this;
    }
    public set gpgTenantName(gpgTenantName: string  | undefined) {
        this['gpg_tenant_name'] = gpgTenantName;
    }
    public get gpgTenantName(): string | undefined {
        return this['gpg_tenant_name'];
    }
    public withGpgUserName(gpgUserName: string): CreateCommitResponse {
        this['gpg_user_name'] = gpgUserName;
        return this;
    }
    public set gpgUserName(gpgUserName: string  | undefined) {
        this['gpg_user_name'] = gpgUserName;
    }
    public get gpgUserName(): string | undefined {
        return this['gpg_user_name'];
    }
    public withShortId(shortId: string): CreateCommitResponse {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string  | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId(): string | undefined {
        return this['short_id'];
    }
    public withCreatedAt(createdAt: string): CreateCommitResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withTitle(title: string): CreateCommitResponse {
        this['title'] = title;
        return this;
    }
    public withAuthorAvatarUrl(authorAvatarUrl: string): CreateCommitResponse {
        this['author_avatar_url'] = authorAvatarUrl;
        return this;
    }
    public set authorAvatarUrl(authorAvatarUrl: string  | undefined) {
        this['author_avatar_url'] = authorAvatarUrl;
    }
    public get authorAvatarUrl(): string | undefined {
        return this['author_avatar_url'];
    }
    public withCommitterAvatarUrl(committerAvatarUrl: string): CreateCommitResponse {
        this['committer_avatar_url'] = committerAvatarUrl;
        return this;
    }
    public set committerAvatarUrl(committerAvatarUrl: string  | undefined) {
        this['committer_avatar_url'] = committerAvatarUrl;
    }
    public get committerAvatarUrl(): string | undefined {
        return this['committer_avatar_url'];
    }
    public withRelateUrl(relateUrl: Array<RelatedCommitSimpleDto>): CreateCommitResponse {
        this['relate_url'] = relateUrl;
        return this;
    }
    public set relateUrl(relateUrl: Array<RelatedCommitSimpleDto>  | undefined) {
        this['relate_url'] = relateUrl;
    }
    public get relateUrl(): Array<RelatedCommitSimpleDto> | undefined {
        return this['relate_url'];
    }
    public withNickName(nickName: string): CreateCommitResponse {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): CreateCommitResponse {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withUserName(userName: string): CreateCommitResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withStats(stats: CommitStatsDto): CreateCommitResponse {
        this['stats'] = stats;
        return this;
    }
    public withStatus(status: CreateCommitResponseStatusEnum | string): CreateCommitResponse {
        this['status'] = status;
        return this;
    }
    public withLastPipeline(lastPipeline: PipelineBasicDto): CreateCommitResponse {
        this['last_pipeline'] = lastPipeline;
        return this;
    }
    public set lastPipeline(lastPipeline: PipelineBasicDto  | undefined) {
        this['last_pipeline'] = lastPipeline;
    }
    public get lastPipeline(): PipelineBasicDto | undefined {
        return this['last_pipeline'];
    }
    public withProjectId(projectId: number): CreateCommitResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withMergeRequest(mergeRequest: SimpleMergeRequestDetailDto): CreateCommitResponse {
        this['merge_request'] = mergeRequest;
        return this;
    }
    public set mergeRequest(mergeRequest: SimpleMergeRequestDetailDto  | undefined) {
        this['merge_request'] = mergeRequest;
    }
    public get mergeRequest(): SimpleMergeRequestDetailDto | undefined {
        return this['merge_request'];
    }
    public withCodeChanges(codeChanges: Array<SimpleDiffDto>): CreateCommitResponse {
        this['code_changes'] = codeChanges;
        return this;
    }
    public set codeChanges(codeChanges: Array<SimpleDiffDto>  | undefined) {
        this['code_changes'] = codeChanges;
    }
    public get codeChanges(): Array<SimpleDiffDto> | undefined {
        return this['code_changes'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCommitResponseStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
