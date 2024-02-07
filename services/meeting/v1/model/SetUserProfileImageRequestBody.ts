

export class SetUserProfileImageRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): SetUserProfileImageRequestBody {
        this['file'] = file;
        return this;
    }
}