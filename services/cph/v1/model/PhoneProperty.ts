

export class PhoneProperty {
    private 'phone_id'?: string;
    public property?: string;
    public constructor(phoneId?: string) { 
        this['phone_id'] = phoneId;
    }
    public withPhoneId(phoneId: string): PhoneProperty {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withProperty(property: string): PhoneProperty {
        this['property'] = property;
        return this;
    }
}