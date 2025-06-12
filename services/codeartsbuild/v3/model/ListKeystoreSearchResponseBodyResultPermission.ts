

export class ListKeystoreSearchResponseBodyResultPermission {
    private 'keystore_id'?: string;
    public setting?: boolean;
    private 'delete'?: boolean;
    public modify?: boolean;
    public usage?: boolean;
    public constructor() { 
    }
    public withKeystoreId(keystoreId: string): ListKeystoreSearchResponseBodyResultPermission {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withSetting(setting: boolean): ListKeystoreSearchResponseBodyResultPermission {
        this['setting'] = setting;
        return this;
    }
    public withDelete(_delete: boolean): ListKeystoreSearchResponseBodyResultPermission {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: boolean  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): boolean | undefined {
        return this['delete'];
    }
    public withModify(modify: boolean): ListKeystoreSearchResponseBodyResultPermission {
        this['modify'] = modify;
        return this;
    }
    public withUsage(usage: boolean): ListKeystoreSearchResponseBodyResultPermission {
        this['usage'] = usage;
        return this;
    }
}