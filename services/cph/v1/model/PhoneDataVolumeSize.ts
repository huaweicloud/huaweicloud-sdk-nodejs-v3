

export class PhoneDataVolumeSize {
    private 'phone_id'?: string;
    private 'new_size'?: number;
    public constructor(phoneId?: string, newSize?: number) { 
        this['phone_id'] = phoneId;
        this['new_size'] = newSize;
    }
    public withPhoneId(phoneId: string): PhoneDataVolumeSize {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withNewSize(newSize: number): PhoneDataVolumeSize {
        this['new_size'] = newSize;
        return this;
    }
    public set newSize(newSize: number  | undefined) {
        this['new_size'] = newSize;
    }
    public get newSize(): number | undefined {
        return this['new_size'];
    }
}