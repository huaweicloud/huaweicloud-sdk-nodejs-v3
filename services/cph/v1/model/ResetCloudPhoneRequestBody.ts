import { PhoneProperty } from './PhoneProperty';


export class ResetCloudPhoneRequestBody {
    private 'image_id'?: string;
    public phones?: Array<PhoneProperty>;
    public constructor(phones?: Array<PhoneProperty>) { 
        this['phones'] = phones;
    }
    public withImageId(imageId: string): ResetCloudPhoneRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withPhones(phones: Array<PhoneProperty>): ResetCloudPhoneRequestBody {
        this['phones'] = phones;
        return this;
    }
}