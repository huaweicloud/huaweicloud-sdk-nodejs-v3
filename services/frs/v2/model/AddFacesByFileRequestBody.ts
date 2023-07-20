

export class AddFacesByFileRequestBody {
    private 'image_file'?: any;
    private 'external_image_id'?: string;
    private 'external_fields'?: string;
    public single?: boolean;
    public constructor(imageFile?: any) { 
        this['image_file'] = imageFile;
    }
    public withImageFile(imageFile: any): AddFacesByFileRequestBody {
        this['image_file'] = imageFile;
        return this;
    }
    public set imageFile(imageFile: any  | undefined) {
        this['image_file'] = imageFile;
    }
    public get imageFile(): any | undefined {
        return this['image_file'];
    }
    public withExternalImageId(externalImageId: string): AddFacesByFileRequestBody {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string  | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId(): string | undefined {
        return this['external_image_id'];
    }
    public withExternalFields(externalFields: string): AddFacesByFileRequestBody {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: string  | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields(): string | undefined {
        return this['external_fields'];
    }
    public withSingle(single: boolean): AddFacesByFileRequestBody {
        this['single'] = single;
        return this;
    }
}