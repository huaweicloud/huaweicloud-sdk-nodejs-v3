

export class AddFacesBase64Req {
    private 'image_base64'?: string;
    private 'external_fields'?: object;
    private 'external_image_id'?: string;
    public single?: boolean;
    public constructor(imageBase64?: string) { 
        this['image_base64'] = imageBase64;
    }
    public withImageBase64(imageBase64: string): AddFacesBase64Req {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string  | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64(): string | undefined {
        return this['image_base64'];
    }
    public withExternalFields(externalFields: object): AddFacesBase64Req {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object  | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields(): object | undefined {
        return this['external_fields'];
    }
    public withExternalImageId(externalImageId: string): AddFacesBase64Req {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string  | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId(): string | undefined {
        return this['external_image_id'];
    }
    public withSingle(single: boolean): AddFacesBase64Req {
        this['single'] = single;
        return this;
    }
}