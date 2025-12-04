

export class ShowCloudPhoneDetailRequest {
    private 'phone_id'?: string;
    public constructor(phoneId?: string) { 
        this['phone_id'] = phoneId;
    }
    public withPhoneId(phoneId: string): ShowCloudPhoneDetailRequest {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
}