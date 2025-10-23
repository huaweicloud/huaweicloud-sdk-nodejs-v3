

export class RepositoryUserBasicDto {
    public id?: number;
    public name?: string;
    public username?: string;
    public state?: RepositoryUserBasicDtoStateEnum | string;
    private 'service_license_status'?: number;
    private 'name_cn'?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    public constructor() { 
    }
    public withId(id: number): RepositoryUserBasicDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepositoryUserBasicDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): RepositoryUserBasicDto {
        this['username'] = username;
        return this;
    }
    public withState(state: RepositoryUserBasicDtoStateEnum | string): RepositoryUserBasicDto {
        this['state'] = state;
        return this;
    }
    public withServiceLicenseStatus(serviceLicenseStatus: number): RepositoryUserBasicDto {
        this['service_license_status'] = serviceLicenseStatus;
        return this;
    }
    public set serviceLicenseStatus(serviceLicenseStatus: number  | undefined) {
        this['service_license_status'] = serviceLicenseStatus;
    }
    public get serviceLicenseStatus(): number | undefined {
        return this['service_license_status'];
    }
    public withNameCn(nameCn: string): RepositoryUserBasicDto {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withNickName(nickName: string): RepositoryUserBasicDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): RepositoryUserBasicDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepositoryUserBasicDtoStateEnum {
    ACTIVE = 'active',
    BLOCKED = 'blocked'
}
