

export class CompareFaceByFileRequestBody {
    private 'image1_file': any | undefined;
    private 'image2_file': any | undefined;
    public constructor(image1File?: any, image2File?: any) { 
        this['image1_file'] = image1File;
        this['image2_file'] = image2File;
    }
    public withImage1File(image1File: any): CompareFaceByFileRequestBody {
        this['image1_file'] = image1File;
        return this;
    }
    public set image1File(image1File: any | undefined) {
        this['image1_file'] = image1File;
    }
    public get image1File() {
        return this['image1_file'];
    }
    public withImage2File(image2File: any): CompareFaceByFileRequestBody {
        this['image2_file'] = image2File;
        return this;
    }
    public set image2File(image2File: any | undefined) {
        this['image2_file'] = image2File;
    }
    public get image2File() {
        return this['image2_file'];
    }
}