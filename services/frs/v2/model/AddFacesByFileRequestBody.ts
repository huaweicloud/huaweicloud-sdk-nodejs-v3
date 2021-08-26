

export class AddFacesByFileRequestBody {
    private 'image_file'?: any | undefined;
    private 'external_image_id'?: string | undefined;
    private 'external_fields'?: string | undefined;
    public constructor() { 
    }
    public withImageFile(imageFile: any): AddFacesByFileRequestBody {
        this['image_file'] = imageFile;
        return this;
    }
    public set imageFile(imageFile: any | undefined) {
        this['image_file'] = imageFile;
    }
    public get imageFile() {
        return this['image_file'];
    }
    public withExternalImageId(externalImageId: string): AddFacesByFileRequestBody {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId() {
        return this['external_image_id'];
    }
    public withExternalFields(externalFields: string): AddFacesByFileRequestBody {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: string | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields() {
        return this['external_fields'];
    }
}