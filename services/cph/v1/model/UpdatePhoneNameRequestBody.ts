

export class UpdatePhoneNameRequestBody {
    private 'phone_name'?: string;
    public constructor(phoneName?: string) { 
        this['phone_name'] = phoneName;
    }
    public withPhoneName(phoneName: string): UpdatePhoneNameRequestBody {
        this['phone_name'] = phoneName;
        return this;
    }
    public set phoneName(phoneName: string  | undefined) {
        this['phone_name'] = phoneName;
    }
    public get phoneName(): string | undefined {
        return this['phone_name'];
    }
}