

export class AddFacesBase64Req {
    private 'image_base64': string | undefined;
    private 'external_fields'?: object | undefined;
    private 'external_image_id'?: string | undefined;
    public constructor(imageBase64?: any) { 
        this['image_base64'] = imageBase64;
    }
    public withImageBase64(imageBase64: string): AddFacesBase64Req {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64() {
        return this['image_base64'];
    }
    public withExternalFields(externalFields: object): AddFacesBase64Req {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields() {
        return this['external_fields'];
    }
    public withExternalImageId(externalImageId: string): AddFacesBase64Req {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId() {
        return this['external_image_id'];
    }
}