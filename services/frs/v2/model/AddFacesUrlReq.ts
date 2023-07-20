

export class AddFacesUrlReq {
    private 'image_url'?: string;
    private 'external_fields'?: object;
    private 'external_image_id'?: string;
    public single?: boolean;
    public constructor(imageUrl?: string) { 
        this['image_url'] = imageUrl;
    }
    public withImageUrl(imageUrl: string): AddFacesUrlReq {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withExternalFields(externalFields: object): AddFacesUrlReq {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object  | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields(): object | undefined {
        return this['external_fields'];
    }
    public withExternalImageId(externalImageId: string): AddFacesUrlReq {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string  | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId(): string | undefined {
        return this['external_image_id'];
    }
    public withSingle(single: boolean): AddFacesUrlReq {
        this['single'] = single;
        return this;
    }
}