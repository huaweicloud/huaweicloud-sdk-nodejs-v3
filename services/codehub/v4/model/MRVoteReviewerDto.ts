import { UserBasicDto } from './UserBasicDto';


export class MRVoteReviewerDto {
    public id?: number;
    public name?: string;
    public username?: string;
    public state?: string;
    private 'service_license_status'?: number;
    private 'avatar_url'?: string;
    private 'avatar_path'?: string;
    public email?: string;
    private 'name_cn'?: string;
    private 'web_url'?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    private 'error_message'?: string;
    private 'is_committer'?: boolean;
    private 'is_verified'?: boolean;
    private 'has_permission'?: boolean;
    public constructor() { 
    }
    public withId(id: number): MRVoteReviewerDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MRVoteReviewerDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): MRVoteReviewerDto {
        this['username'] = username;
        return this;
    }
    public withState(state: string): MRVoteReviewerDto {
        this['state'] = state;
        return this;
    }
    public withServiceLicenseStatus(serviceLicenseStatus: number): MRVoteReviewerDto {
        this['service_license_status'] = serviceLicenseStatus;
        return this;
    }
    public set serviceLicenseStatus(serviceLicenseStatus: number  | undefined) {
        this['service_license_status'] = serviceLicenseStatus;
    }
    public get serviceLicenseStatus(): number | undefined {
        return this['service_license_status'];
    }
    public withAvatarUrl(avatarUrl: string): MRVoteReviewerDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withAvatarPath(avatarPath: string): MRVoteReviewerDto {
        this['avatar_path'] = avatarPath;
        return this;
    }
    public set avatarPath(avatarPath: string  | undefined) {
        this['avatar_path'] = avatarPath;
    }
    public get avatarPath(): string | undefined {
        return this['avatar_path'];
    }
    public withEmail(email: string): MRVoteReviewerDto {
        this['email'] = email;
        return this;
    }
    public withNameCn(nameCn: string): MRVoteReviewerDto {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withWebUrl(webUrl: string): MRVoteReviewerDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withNickName(nickName: string): MRVoteReviewerDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): MRVoteReviewerDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withErrorMessage(errorMessage: string): MRVoteReviewerDto {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withIsCommitter(isCommitter: boolean): MRVoteReviewerDto {
        this['is_committer'] = isCommitter;
        return this;
    }
    public set isCommitter(isCommitter: boolean  | undefined) {
        this['is_committer'] = isCommitter;
    }
    public get isCommitter(): boolean | undefined {
        return this['is_committer'];
    }
    public withIsVerified(isVerified: boolean): MRVoteReviewerDto {
        this['is_verified'] = isVerified;
        return this;
    }
    public set isVerified(isVerified: boolean  | undefined) {
        this['is_verified'] = isVerified;
    }
    public get isVerified(): boolean | undefined {
        return this['is_verified'];
    }
    public withHasPermission(hasPermission: boolean): MRVoteReviewerDto {
        this['has_permission'] = hasPermission;
        return this;
    }
    public set hasPermission(hasPermission: boolean  | undefined) {
        this['has_permission'] = hasPermission;
    }
    public get hasPermission(): boolean | undefined {
        return this['has_permission'];
    }
}