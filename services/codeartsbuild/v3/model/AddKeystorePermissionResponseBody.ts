

export class AddKeystorePermissionResponseBody {
    public id?: string;
    public setting?: boolean;
    private 'delete'?: boolean;
    private 'keystore_id'?: string;
    public modify?: boolean;
    public usage?: boolean;
    private 'user_name'?: string;
    private 'is_creator'?: boolean;
    private 'can_absent'?: boolean;
    public constructor() { 
    }
    public withId(id: string): AddKeystorePermissionResponseBody {
        this['id'] = id;
        return this;
    }
    public withSetting(setting: boolean): AddKeystorePermissionResponseBody {
        this['setting'] = setting;
        return this;
    }
    public withDelete(_delete: boolean): AddKeystorePermissionResponseBody {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: boolean  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): boolean | undefined {
        return this['delete'];
    }
    public withKeystoreId(keystoreId: string): AddKeystorePermissionResponseBody {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withModify(modify: boolean): AddKeystorePermissionResponseBody {
        this['modify'] = modify;
        return this;
    }
    public withUsage(usage: boolean): AddKeystorePermissionResponseBody {
        this['usage'] = usage;
        return this;
    }
    public withUserName(userName: string): AddKeystorePermissionResponseBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withIsCreator(isCreator: boolean): AddKeystorePermissionResponseBody {
        this['is_creator'] = isCreator;
        return this;
    }
    public set isCreator(isCreator: boolean  | undefined) {
        this['is_creator'] = isCreator;
    }
    public get isCreator(): boolean | undefined {
        return this['is_creator'];
    }
    public withCanAbsent(canAbsent: boolean): AddKeystorePermissionResponseBody {
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