

export class RepositoryCommitDto {
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
    public constructor() { 
    }
    public withId(id: string): RepositoryCommitDto {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): RepositoryCommitDto {
        this['message'] = message;
        return this;
    }
    public withParentIds(parentIds: Array<string>): RepositoryCommitDto {
        this['parent_ids'] = parentIds;
        return this;
    }
    public set parentIds(parentIds: Array<string>  | undefined) {
        this['parent_ids'] = parentIds;
    }
    public get parentIds(): Array<string> | undefined {
        return this['parent_ids'];
    }
    public withAuthoredDate(authoredDate: string): RepositoryCommitDto {
        this['authored_date'] = authoredDate;
        return this;
    }
    public set authoredDate(authoredDate: string  | undefined) {
        this['authored_date'] = authoredDate;
    }
    public get authoredDate(): string | undefined {
        return this['authored_date'];
    }
    public withAuthorName(authorName: string): RepositoryCommitDto {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withAuthorEmail(authorEmail: string): RepositoryCommitDto {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withCommittedDate(committedDate: string): RepositoryCommitDto {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: string  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): string | undefined {
        return this['committed_date'];
    }
    public withCommitterName(committerName: string): RepositoryCommitDto {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withCommitterEmail(committerEmail: string): RepositoryCommitDto {
        this['committer_email'] = committerEmail;
        return this;
    }
    public set committerEmail(committerEmail: string  | undefined) {
        this['committer_email'] = committerEmail;
    }
    public get committerEmail(): string | undefined {
        return this['committer_email'];
    }
    public withOpenGpgVerified(openGpgVerified: boolean): RepositoryCommitDto {
        this['open_gpg_verified'] = openGpgVerified;
        return this;
    }
    public set openGpgVerified(openGpgVerified: boolean  | undefined) {
        this['open_gpg_verified'] = openGpgVerified;
    }
    public get openGpgVerified(): boolean | undefined {
        return this['open_gpg_verified'];
    }
    public withVerificationStatus(verificationStatus: number): RepositoryCommitDto {
        this['verification_status'] = verificationStatus;
        return this;
    }
    public set verificationStatus(verificationStatus: number  | undefined) {
        this['verification_status'] = verificationStatus;
    }
    public get verificationStatus(): number | undefined {
        return this['verification_status'];
    }
    public withGpgPrimaryKeyId(gpgPrimaryKeyId: string): RepositoryCommitDto {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
        return this;
    }
    public set gpgPrimaryKeyId(gpgPrimaryKeyId: string  | undefined) {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
    }
    public get gpgPrimaryKeyId(): string | undefined {
        return this['gpg_primary_key_id'];
    }
    public withName(name: string): RepositoryCommitDto {
        this['name'] = name;
        return this;
    }
    public withGpgNickName(gpgNickName: string): RepositoryCommitDto {
        this['gpg_nick_name'] = gpgNickName;
        return this;
    }
    public set gpgNickName(gpgNickName: string  | undefined) {
        this['gpg_nick_name'] = gpgNickName;
    }
    public get gpgNickName(): string | undefined {
        return this['gpg_nick_name'];
    }
    public withGpgTenantName(gpgTenantName: string): RepositoryCommitDto {
        this['gpg_tenant_name'] = gpgTenantName;
        return this;
    }
    public set gpgTenantName(gpgTenantName: string  | undefined) {
        this['gpg_tenant_name'] = gpgTenantName;
    }
    public get gpgTenantName(): string | undefined {
        return this['gpg_tenant_name'];
    }
    public withGpgUserName(gpgUserName: string): RepositoryCommitDto {
        this['gpg_user_name'] = gpgUserName;
        return this;
    }
    public set gpgUserName(gpgUserName: string  | undefined) {
        this['gpg_user_name'] = gpgUserName;
    }
    public get gpgUserName(): string | undefined {
        return this['gpg_user_name'];
    }
}