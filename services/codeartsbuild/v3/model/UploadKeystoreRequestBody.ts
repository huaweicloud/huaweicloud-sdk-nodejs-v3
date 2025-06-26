

export class UploadKeystoreRequestBody {
    public file?: any;
    public privacy?: string;
    public description?: string;
    public constructor(file?: any, privacy?: string) { 
        this['file'] = file;
        this['privacy'] = privacy;
    }
    public withFile(file: any): UploadKeystoreRequestBody {
        this['file'] = file;
        return this;
    }
    public withPrivacy(privacy: string): UploadKeystoreRequestBody {
        this['privacy'] = privacy;
        return this;
    }
    public withDescription(description: string): UploadKeystoreRequestBody {
        this['description'] = description;
        return this;
    }
}