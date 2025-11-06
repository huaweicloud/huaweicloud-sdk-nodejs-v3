

export class CreateRepositoryMemberResponseDto {
    private 'user_iam_id'?: string;
    private 'user_name'?: string;
    private 'tenant_name'?: string;
    private 'user_nick_name'?: string;
    public status?: string;
    public message?: string;
    public constructor() { 
    }
    public withUserIamId(userIamId: string): CreateRepositoryMemberResponseDto {
        this['user_iam_id'] = userIamId;
        return this;
    }
    public set userIamId(userIamId: string  | undefined) {
        this['user_iam_id'] = userIamId;
    }
    public get userIamId(): string | undefined {
        return this['user_iam_id'];
    }
    public withUserName(userName: string): CreateRepositoryMemberResponseDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withTenantName(tenantName: string): CreateRepositoryMemberResponseDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withUserNickName(userNickName: string): CreateRepositoryMemberResponseDto {
        this['user_nick_name'] = userNickName;
        return this;
    }
    public set userNickName(userNickName: string  | undefined) {
        this['user_nick_name'] = userNickName;
    }
    public get userNickName(): string | undefined {
        return this['user_nick_name'];
    }
    public withStatus(status: string): CreateRepositoryMemberResponseDto {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CreateRepositoryMemberResponseDto {
        this['message'] = message;
        return this;
    }
}