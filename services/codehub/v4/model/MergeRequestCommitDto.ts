

export class MergeRequestCommitDto {
    public id?: string;
    private 'short_id'?: string;
    public title?: string;
    public message?: string;
    private 'author_name'?: string;
    public name?: string;
    private 'user_name'?: string;
    private 'tenant_name'?: string;
    private 'nick_name'?: string;
    private 'authored_date'?: string;
    private 'committed_date'?: string;
    private 'committer_name'?: string;
    private 'gpg_primary_key_id'?: string;
    private 'open_gpg_verified'?: boolean;
    private 'verification_status'?: boolean;
    private 'parent_ids'?: Array<string>;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withId(id: string): MergeRequestCommitDto {
        this['id'] = id;
        return this;
    }
    public withShortId(shortId: string): MergeRequestCommitDto {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string  | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId(): string | undefined {
        return this['short_id'];
    }
    public withTitle(title: string): MergeRequestCommitDto {
        this['title'] = title;
        return this;
    }
    public withMessage(message: string): MergeRequestCommitDto {
        this['message'] = message;
        return this;
    }
    public withAuthorName(authorName: string): MergeRequestCommitDto {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withName(name: string): MergeRequestCommitDto {
        this['name'] = name;
        return this;
    }
    public withUserName(userName: string): MergeRequestCommitDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withTenantName(tenantName: string): MergeRequestCommitDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withNickName(nickName: string): MergeRequestCommitDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withAuthoredDate(authoredDate: string): MergeRequestCommitDto {
        this['authored_date'] = authoredDate;
        return this;
    }
    public set authoredDate(authoredDate: string  | undefined) {
        this['authored_date'] = authoredDate;
    }
    public get authoredDate(): string | undefined {
        return this['authored_date'];
    }
    public withCommittedDate(committedDate: string): MergeRequestCommitDto {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: string  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): string | undefined {
        return this['committed_date'];
    }
    public withCommitterName(committerName: string): MergeRequestCommitDto {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withGpgPrimaryKeyId(gpgPrimaryKeyId: string): MergeRequestCommitDto {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
        return this;
    }
    public set gpgPrimaryKeyId(gpgPrimaryKeyId: string  | undefined) {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
    }
    public get gpgPrimaryKeyId(): string | undefined {
        return this['gpg_primary_key_id'];
    }
    public withOpenGpgVerified(openGpgVerified: boolean): MergeRequestCommitDto {
        this['open_gpg_verified'] = openGpgVerified;
        return this;
    }
    public set openGpgVerified(openGpgVerified: boolean  | undefined) {
        this['open_gpg_verified'] = openGpgVerified;
    }
    public get openGpgVerified(): boolean | undefined {
        return this['open_gpg_verified'];
    }
    public withVerificationStatus(verificationStatus: boolean): MergeRequestCommitDto {
        this['verification_status'] = verificationStatus;
        return this;
    }
    public set verificationStatus(verificationStatus: boolean  | undefined) {
        this['verification_status'] = verificationStatus;
    }
    public get verificationStatus(): boolean | undefined {
        return this['verification_status'];
    }
    public withParentIds(parentIds: Array<string>): MergeRequestCommitDto {
        this['parent_ids'] = parentIds;
        return this;
    }
    public set parentIds(parentIds: Array<string>  | undefined) {
        this['parent_ids'] = parentIds;
    }
    public get parentIds(): Array<string> | undefined {
        return this['parent_ids'];
    }
    public withCreatedAt(createdAt: string): MergeRequestCommitDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}