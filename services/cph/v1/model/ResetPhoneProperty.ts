

export class ResetPhoneProperty {
    private 'phone_id'?: string;
    public property?: string;
    private 'factory_reset_enabled'?: boolean;
    public constructor(phoneId?: string) { 
        this['phone_id'] = phoneId;
    }
    public withPhoneId(phoneId: string): ResetPhoneProperty {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withProperty(property: string): ResetPhoneProperty {
        this['property'] = property;
        return this;
    }
    public withFactoryResetEnabled(factoryResetEnabled: boolean): ResetPhoneProperty {
        this['factory_reset_enabled'] = factoryResetEnabled;
        return this;
    }
    public set factoryResetEnabled(factoryResetEnabled: boolean  | undefined) {
        this['factory_reset_enabled'] = factoryResetEnabled;
    }
    public get factoryResetEnabled(): boolean | undefined {
        return this['factory_reset_enabled'];
    }
}