

export class GrantedUsersDto {
    public id?: number;
    public name?: string;
    private 'name_cn'?: string;
    public username?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    public email?: string;
    private 'iam_id'?: string;
    private 'service_license_status'?: number;
    public constructor() { 
    }
    public withId(id: number): GrantedUsersDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GrantedUsersDto {
        this['name'] = name;
        return this;
    }
    public withNameCn(nameCn: string): GrantedUsersDto {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withUsername(username: string): GrantedUsersDto {
        this['username'] = username;
        return this;
    }
    public withNickName(nickName: string): GrantedUsersDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): GrantedUsersDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withEmail(email: string): GrantedUsersDto {
        this['email'] = email;
        return this;
    }
    public withIamId(iamId: string): GrantedUsersDto {
        this['iam_id'] = iamId;
        return this;
    }
    public set iamId(iamId: string  | undefined) {
        this['iam_id'] = iamId;
    }
    public get iamId(): string | undefined {
        return this['iam_id'];
    }
    public withServiceLicenseStatus(serviceLicenseStatus: number): GrantedUsersDto {
        this['service_license_status'] = serviceLicenseStatus;
        return this;
    }
    public set serviceLicenseStatus(serviceLicenseStatus: number  | undefined) {
        this['service_license_status'] = serviceLicenseStatus;
    }
    public get serviceLicenseStatus(): number | undefined {
        return this['service_license_status'];
    }
}