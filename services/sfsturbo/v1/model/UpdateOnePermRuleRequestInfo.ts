

export class UpdateOnePermRuleRequestInfo {
    private 'rw_type'?: string;
    private 'user_type'?: string;
    public constructor() { 
    }
    public withRwType(rwType: string): UpdateOnePermRuleRequestInfo {
        this['rw_type'] = rwType;
        return this;
    }
    public set rwType(rwType: string  | undefined) {
        this['rw_type'] = rwType;
    }
    public get rwType(): string | undefined {
        return this['rw_type'];
    }
    public withUserType(userType: string): UpdateOnePermRuleRequestInfo {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
}