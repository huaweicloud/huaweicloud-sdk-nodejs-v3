

export class SetProfileImageRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): SetProfileImageRequestBody {
        this['file'] = file;
        return this;
    }
}