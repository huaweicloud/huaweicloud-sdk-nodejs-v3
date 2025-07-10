

export class UpdateKeystorePermissionRequestBody {
    private 'can_absent'?: boolean;
    private 'delete'?: boolean;
    public id?: string;
    private 'keystore_id'?: string;
    public modify?: boolean;
    public usage?: boolean;
    private 'user_name'?: string;
    public constructor(_delete?: boolean, id?: string, keystoreId?: string, modify?: boolean, usage?: boolean, userName?: string) { 
        this['delete'] = _delete;
        this['id'] = id;
        this['keystore_id'] = keystoreId;
        this['modify'] = modify;
        this['usage'] = usage;
        this['user_name'] = userName;
    }
    public withCanAbsent(canAbsent: boolean): UpdateKeystorePermissionRequestBody {
        this['can_absent'] = canAbsent;
        return this;
    }
    public set canAbsent(canAbsent: boolean  | undefined) {
        this['can_absent'] = canAbsent;
    }
    public get canAbsent(): boolean | undefined {
        return this['can_absent'];
    }
    public withDelete(_delete: boolean): UpdateKeystorePermissionRequestBody {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: boolean  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): boolean | undefined {
        return this['delete'];
    }
    public withId(id: string): UpdateKeystorePermissionRequestBody {
        this['id'] = id;
        return this;
    }
    public withKeystoreId(keystoreId: string): UpdateKeystorePermissionRequestBody {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withModify(modify: boolean): UpdateKeystorePermissionRequestBody {
        this['modify'] = modify;
        return this;
    }
    public withUsage(usage: boolean): UpdateKeystorePermissionRequestBody {
        this['usage'] = usage;
        return this;
    }
    public withUserName(userName: string): UpdateKeystorePermissionRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}