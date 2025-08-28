

export class DatabaseInstabcesParam {
    public id?: string;
    public adminUser?: string;
    public adminPassword?: string;
    public constructor(id?: string, adminUser?: string, adminPassword?: string) { 
        this['id'] = id;
        this['adminUser'] = adminUser;
        this['adminPassword'] = adminPassword;
    }
    public withId(id: string): DatabaseInstabcesParam {
        this['id'] = id;
        return this;
    }
    public withAdminUser(adminUser: string): DatabaseInstabcesParam {
        this['adminUser'] = adminUser;
        return this;
    }
    public withAdminPassword(adminPassword: string): DatabaseInstabcesParam {
        this['adminPassword'] = adminPassword;
        return this;
    }
}