import { UserBasicDto } from './UserBasicDto';


export class MergeRequestVoteReviewerDto {
    public id?: number;
    public name?: string;
    public username?: string;
    public state?: MergeRequestVoteReviewerDtoStateEnum | string;
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
    public constructor() { 
    }
    public withId(id: number): MergeRequestVoteReviewerDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MergeRequestVoteReviewerDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): MergeRequestVoteReviewerDto {
        this['username'] = username;
        return this;
    }
    public withState(state: MergeRequestVoteReviewerDtoStateEnum | string): MergeRequestVoteReviewerDto {
        this['state'] = state;
        return this;
    }
    public withServiceLicenseStatus(serviceLicenseStatus: number): MergeRequestVoteReviewerDto {
        this['service_license_status'] = serviceLicenseStatus;
        return this;
    }
    public set serviceLicenseStatus(serviceLicenseStatus: number  | undefined) {
        this['service_license_status'] = serviceLicenseStatus;
    }
    public get serviceLicenseStatus(): number | undefined {
        return this['service_license_status'];
    }
    public withAvatarUrl(avatarUrl: string): MergeRequestVoteReviewerDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withAvatarPath(avatarPath: string): MergeRequestVoteReviewerDto {
        this['avatar_path'] = avatarPath;
        return this;
    }
    public set avatarPath(avatarPath: string  | undefined) {
        this['avatar_path'] = avatarPath;
    }
    public get avatarPath(): string | undefined {
        return this['avatar_path'];
    }
    public withEmail(email: string): MergeRequestVoteReviewerDto {
        this['email'] = email;
        return this;
    }
    public withNameCn(nameCn: string): MergeRequestVoteReviewerDto {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withWebUrl(webUrl: string): MergeRequestVoteReviewerDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withNickName(nickName: string): MergeRequestVoteReviewerDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): MergeRequestVoteReviewerDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withErrorMessage(errorMessage: string): MergeRequestVoteReviewerDto {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withIsCommitter(isCommitter: boolean): MergeRequestVoteReviewerDto {
        this['is_committer'] = isCommitter;
        return this;
    }
    public set isCommitter(isCommitter: boolean  | undefined) {
        this['is_committer'] = isCommitter;
    }
    public get isCommitter(): boolean | undefined {
        return this['is_committer'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MergeRequestVoteReviewerDtoStateEnum {
    ACTIVE = 'active',
    BLOCKED = 'blocked',
    ERROR = 'error'
}
