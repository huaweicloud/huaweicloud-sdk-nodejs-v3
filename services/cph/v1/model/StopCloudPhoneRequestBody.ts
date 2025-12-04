

export class StopCloudPhoneRequestBody {
    private 'phone_ids'?: Array<string>;
    public constructor(phoneIds?: Array<string>) { 
        this['phone_ids'] = phoneIds;
    }
    public withPhoneIds(phoneIds: Array<string>): StopCloudPhoneRequestBody {
        this['phone_ids'] = phoneIds;
        return this;
    }
    public set phoneIds(phoneIds: Array<string>  | undefined) {
        this['phone_ids'] = phoneIds;
    }
    public get phoneIds(): Array<string> | undefined {
        return this['phone_ids'];
    }
}