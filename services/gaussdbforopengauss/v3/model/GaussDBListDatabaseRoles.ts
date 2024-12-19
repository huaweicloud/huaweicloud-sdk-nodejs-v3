

export class GaussDBListDatabaseRoles {
    public name?: string;
    public memberof?: string;
    private 'lock_status'?: boolean;
    public attribute?: object;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): GaussDBListDatabaseRoles {
        this['name'] = name;
        return this;
    }
    public withMemberof(memberof: string): GaussDBListDatabaseRoles {
        this['memberof'] = memberof;
        return this;
    }
    public withLockStatus(lockStatus: boolean): GaussDBListDatabaseRoles {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: boolean  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): boolean | undefined {
        return this['lock_status'];
    }
    public withAttribute(attribute: object): GaussDBListDatabaseRoles {
        this['attribute'] = attribute;
        return this;
    }
}