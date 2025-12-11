

export class PropertyToUpdate {
    private 'phone_id'?: string;
    public property?: string;
    public constructor(phoneId?: string, property?: string) { 
        this['phone_id'] = phoneId;
        this['property'] = property;
    }
    public withPhoneId(phoneId: string): PropertyToUpdate {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withProperty(property: string): PropertyToUpdate {
        this['property'] = property;
        return this;
    }
}