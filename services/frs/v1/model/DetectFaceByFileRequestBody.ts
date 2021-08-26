

export class DetectFaceByFileRequestBody {
    private 'image_file': any | undefined;
    public attributes?: string;
    public constructor(imageFile?: any) { 
        this['image_file'] = imageFile;
    }
    public withImageFile(imageFile: any): DetectFaceByFileRequestBody {
        this['image_file'] = imageFile;
        return this;
    }
    public set imageFile(imageFile: any | undefined) {
        this['image_file'] = imageFile;
    }
    public get imageFile() {
        return this['image_file'];
    }
    public withAttributes(attributes: string): DetectFaceByFileRequestBody {
        this['attributes'] = attributes;
        return this;
    }
}