import { RepositoryCommitDto } from './RepositoryCommitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCommitRevertResponse extends SdkResponse {
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
    public state?: string;
    private 'cherry_pick_branch_name'?: string;
    private 'revert_branch_name'?: string;
    public iid?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateCommitRevertResponse {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): CreateCommitRevertResponse {
        this['message'] = message;
        return this;
    }
    public withParentIds(parentIds: Array<string>): CreateCommitRevertResponse {
        this['parent_ids'] = parentIds;
        return this;
    }
    public set parentIds(parentIds: Array<string>  | undefined) {
        this['parent_ids'] = parentIds;
    }
    public get parentIds(): Array<string> | undefined {
        return this['parent_ids'];
    }
    public withAuthoredDate(authoredDate: string): CreateCommitRevertResponse {
        this['authored_date'] = authoredDate;
        return this;
    }
    public set authoredDate(authoredDate: string  | undefined) {
        this['authored_date'] = authoredDate;
    }
    public get authoredDate(): string | undefined {
        return this['authored_date'];
    }
    public withAuthorName(authorName: string): CreateCommitRevertResponse {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withAuthorEmail(authorEmail: string): CreateCommitRevertResponse {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withCommittedDate(committedDate: string): CreateCommitRevertResponse {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: string  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): string | undefined {
        return this['committed_date'];
    }
    public withCommitterName(committerName: string): CreateCommitRevertResponse {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withCommitterEmail(committerEmail: string): CreateCommitRevertResponse {
        this['committer_email'] = committerEmail;
        return this;
    }
    public set committerEmail(committerEmail: string  | undefined) {
        this['committer_email'] = committerEmail;
    }
    public get committerEmail(): string | undefined {
        return this['committer_email'];
    }
    public withOpenGpgVerified(openGpgVerified: boolean): CreateCommitRevertResponse {
        this['open_gpg_verified'] = openGpgVerified;
        return this;
    }
    public set openGpgVerified(openGpgVerified: boolean  | undefined) {
        this['open_gpg_verified'] = openGpgVerified;
    }
    public get openGpgVerified(): boolean | undefined {
        return this['open_gpg_verified'];
    }
    public withVerificationStatus(verificationStatus: number): CreateCommitRevertResponse {
        this['verification_status'] = verificationStatus;
        return this;
    }
    public set verificationStatus(verificationStatus: number  | undefined) {
        this['verification_status'] = verificationStatus;
    }
    public get verificationStatus(): number | undefined {
        return this['verification_status'];
    }
    public withGpgPrimaryKeyId(gpgPrimaryKeyId: string): CreateCommitRevertResponse {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
        return this;
    }
    public set gpgPrimaryKeyId(gpgPrimaryKeyId: string  | undefined) {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
    }
    public get gpgPrimaryKeyId(): string | undefined {
        return this['gpg_primary_key_id'];
    }
    public withName(name: string): CreateCommitRevertResponse {
        this['name'] = name;
        return this;
    }
    public withGpgNickName(gpgNickName: string): CreateCommitRevertResponse {
        this['gpg_nick_name'] = gpgNickName;
        return this;
    }
    public set gpgNickName(gpgNickName: string  | undefined) {
        this['gpg_nick_name'] = gpgNickName;
    }
    public get gpgNickName(): string | undefined {
        return this['gpg_nick_name'];
    }
    public withGpgTenantName(gpgTenantName: string): CreateCommitRevertResponse {
        this['gpg_tenant_name'] = gpgTenantName;
        return this;
    }
    public set gpgTenantName(gpgTenantName: string  | undefined) {
        this['gpg_tenant_name'] = gpgTenantName;
    }
    public get gpgTenantName(): string | undefined {
        return this['gpg_tenant_name'];
    }
    public withGpgUserName(gpgUserName: string): CreateCommitRevertResponse {
        this['gpg_user_name'] = gpgUserName;
        return this;
    }
    public set gpgUserName(gpgUserName: string  | undefined) {
        this['gpg_user_name'] = gpgUserName;
    }
    public get gpgUserName(): string | undefined {
        return this['gpg_user_name'];
    }
    public withShortId(shortId: string): CreateCommitRevertResponse {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string  | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId(): string | undefined {
        return this['short_id'];
    }
    public withCreatedAt(createdAt: string): CreateCommitRevertResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withTitle(title: string): CreateCommitRevertResponse {
        this['title'] = title;
        return this;
    }
    public withAuthorAvatarUrl(authorAvatarUrl: string): CreateCommitRevertResponse {
        this['author_avatar_url'] = authorAvatarUrl;
        return this;
    }
    public set authorAvatarUrl(authorAvatarUrl: string  | undefined) {
        this['author_avatar_url'] = authorAvatarUrl;
    }
    public get authorAvatarUrl(): string | undefined {
        return this['author_avatar_url'];
    }
    public withCommitterAvatarUrl(committerAvatarUrl: string): CreateCommitRevertResponse {
        this['committer_avatar_url'] = committerAvatarUrl;
        return this;
    }
    public set committerAvatarUrl(committerAvatarUrl: string  | undefined) {
        this['committer_avatar_url'] = committerAvatarUrl;
    }
    public get committerAvatarUrl(): string | undefined {
        return this['committer_avatar_url'];
    }
    public withState(state: string): CreateCommitRevertResponse {
        this['state'] = state;
        return this;
    }
    public withCherryPickBranchName(cherryPickBranchName: string): CreateCommitRevertResponse {
        this['cherry_pick_branch_name'] = cherryPickBranchName;
        return this;
    }
    public set cherryPickBranchName(cherryPickBranchName: string  | undefined) {
        this['cherry_pick_branch_name'] = cherryPickBranchName;
    }
    public get cherryPickBranchName(): string | undefined {
        return this['cherry_pick_branch_name'];
    }
    public withRevertBranchName(revertBranchName: string): CreateCommitRevertResponse {
        this['revert_branch_name'] = revertBranchName;
        return this;
    }
    public set revertBranchName(revertBranchName: string  | undefined) {
        this['revert_branch_name'] = revertBranchName;
    }
    public get revertBranchName(): string | undefined {
        return this['revert_branch_name'];
    }
    public withIid(iid: number): CreateCommitRevertResponse {
        this['iid'] = iid;
        return this;
    }
}