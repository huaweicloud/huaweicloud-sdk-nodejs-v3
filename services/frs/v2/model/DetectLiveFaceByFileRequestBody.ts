

export class DetectLiveFaceByFileRequestBody {
    private 'image_file'?: any;
    public constructor(imageFile?: any) { 
        this['image_file'] = imageFile;
    }
    public withImageFile(imageFile: any): DetectLiveFaceByFileRequestBody {
        this['image_file'] = imageFile;
        return this;
    }
    public set imageFile(imageFile: any  | undefined) {
        this['image_file'] = imageFile;
    }
    public get imageFile(): any | undefined {
        return this['image_file'];
    }
}