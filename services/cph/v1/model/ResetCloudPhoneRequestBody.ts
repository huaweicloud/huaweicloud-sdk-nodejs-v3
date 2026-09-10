import { ResetPhoneProperty } from './ResetPhoneProperty';


export class ResetCloudPhoneRequestBody {
    private 'image_id'?: string;
    public phones?: Array<ResetPhoneProperty>;
    public constructor(phones?: Array<ResetPhoneProperty>) { 
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
    public withPhones(phones: Array<ResetPhoneProperty>): ResetCloudPhoneRequestBody {
        this['phones'] = phones;
        return this;
    }
}