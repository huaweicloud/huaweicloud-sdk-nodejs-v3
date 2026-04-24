

export class SubscriptionDataType {
    private 'is_dml_subscribed'?: boolean;
    private 'is_ddl_subscribed'?: boolean;
    public constructor(isDmlSubscribed?: boolean, isDdlSubscribed?: boolean) { 
        this['is_dml_subscribed'] = isDmlSubscribed;
        this['is_ddl_subscribed'] = isDdlSubscribed;
    }
    public withIsDmlSubscribed(isDmlSubscribed: boolean): SubscriptionDataType {
        this['is_dml_subscribed'] = isDmlSubscribed;
        return this;
    }
    public set isDmlSubscribed(isDmlSubscribed: boolean  | undefined) {
        this['is_dml_subscribed'] = isDmlSubscribed;
    }
    public get isDmlSubscribed(): boolean | undefined {
        return this['is_dml_subscribed'];
    }
    public withIsDdlSubscribed(isDdlSubscribed: boolean): SubscriptionDataType {
        this['is_ddl_subscribed'] = isDdlSubscribed;
        return this;
    }
    public set isDdlSubscribed(isDdlSubscribed: boolean  | undefined) {
        this['is_ddl_subscribed'] = isDdlSubscribed;
    }
    public get isDdlSubscribed(): boolean | undefined {
        return this['is_ddl_subscribed'];
    }
}