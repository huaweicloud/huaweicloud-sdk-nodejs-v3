

export class AddKeystorePermissionRequestBody {
    private 'delete'?: boolean;
    private 'keystore_id'?: string;
    public modify?: boolean;
    public usage?: boolean;
    private 'user_name'?: string;
    public setting?: boolean;
    private 'can_absent'?: boolean;
    public constructor(_delete?: boolean, keystoreId?: string, modify?: boolean, usage?: boolean, userName?: string, setting?: boolean, canAbsent?: boolean) { 
        this['delete'] = _delete;
        this['keystore_id'] = keystoreId;
        this['modify'] = modify;
        this['usage'] = usage;
        this['user_name'] = userName;
        this['setting'] = setting;
        this['can_absent'] = canAbsent;
    }
    public withDelete(_delete: boolean): AddKeystorePermissionRequestBody {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: boolean  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): boolean | undefined {
        return this['delete'];
    }
    public withKeystoreId(keystoreId: string): AddKeystorePermissionRequestBody {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withModify(modify: boolean): AddKeystorePermissionRequestBody {
        this['modify'] = modify;
        return this;
    }
    public withUsage(usage: boolean): AddKeystorePermissionRequestBody {
        this['usage'] = usage;
        return this;
    }
    public withUserName(userName: string): AddKeystorePermissionRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSetting(setting: boolean): AddKeystorePermissionRequestBody {
        this['setting'] = setting;
        return this;
    }
    public withCanAbsent(canAbsent: boolean): AddKeystorePermissionRequestBody {
        this['can_absent'] = canAbsent;
        return this;
    }
    public set canAbsent(canAbsent: boolean  | undefined) {
        this['can_absent'] = canAbsent;
    }
    public get canAbsent(): boolean | undefined {
        return this['can_absent'];
    }
}