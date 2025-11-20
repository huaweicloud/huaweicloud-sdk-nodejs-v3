

export class DNInstance {
    private 'dn_instance_id'?: string;
    private 'admin_user'?: string;
    private 'admin_password'?: string;
    public constructor() { 
    }
    public withDnInstanceId(dnInstanceId: string): DNInstance {
        this['dn_instance_id'] = dnInstanceId;
        return this;
    }
    public set dnInstanceId(dnInstanceId: string  | undefined) {
        this['dn_instance_id'] = dnInstanceId;
    }
    public get dnInstanceId(): string | undefined {
        return this['dn_instance_id'];
    }
    public withAdminUser(adminUser: string): DNInstance {
        this['admin_user'] = adminUser;
        return this;
    }
    public set adminUser(adminUser: string  | undefined) {
        this['admin_user'] = adminUser;
    }
    public get adminUser(): string | undefined {
        return this['admin_user'];
    }
    public withAdminPassword(adminPassword: string): DNInstance {
        this['admin_password'] = adminPassword;
        return this;
    }
    public set adminPassword(adminPassword: string  | undefined) {
        this['admin_password'] = adminPassword;
    }
    public get adminPassword(): string | undefined {
        return this['admin_password'];
    }
}