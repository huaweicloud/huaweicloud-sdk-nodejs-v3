

export class Property {
    private 'phone_id'?: string;
    public property?: string;
    public constructor(phoneId?: string, property?: string) { 
        this['phone_id'] = phoneId;
        this['property'] = property;
    }
    public withPhoneId(phoneId: string): Property {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withProperty(property: string): Property {
        this['property'] = property;
        return this;
    }
}