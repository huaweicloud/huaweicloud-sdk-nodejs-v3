

export class UserMigrationRole {
    public role?: string;
    public constructor(role?: string) { 
        this['role'] = role;
    }
    public withRole(role: string): UserMigrationRole {
        this['role'] = role;
        return this;
    }
}