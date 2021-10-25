

export class AddFacesUrlReq {
    private 'image_url': string | undefined;
    private 'external_fields'?: object | undefined;
    private 'external_image_id'?: string | undefined;
    public single?: boolean;
    public constructor(imageUrl?: any) { 
        this['image_url'] = imageUrl;
    }
    public withImageUrl(imageUrl: string): AddFacesUrlReq {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl() {
        return this['image_url'];
    }
    public withExternalFields(externalFields: object): AddFacesUrlReq {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields() {
        return this['external_fields'];
    }
    public withExternalImageId(externalImageId: string): AddFacesUrlReq {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId() {
        return this['external_image_id'];
    }
    public withSingle(single: boolean): AddFacesUrlReq {
        this['single'] = single;
        return this;
    }
}