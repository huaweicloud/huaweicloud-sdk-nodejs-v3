

export class DetectFaceByFileIntlRequestBody {
    private 'image_file': any | undefined;
    public constructor(imageFile?: any) { 
        this['image_file'] = imageFile;
    }
    public withImageFile(imageFile: any): DetectFaceByFileIntlRequestBody {
        this['image_file'] = imageFile;
        return this;
    }
    public set imageFile(imageFile: any | undefined) {
        this['image_file'] = imageFile;
    }
    public get imageFile() {
        return this['image_file'];
    }
}