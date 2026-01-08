

export class ImportUserListRequestBody {
    public file?: any;
    public constructor() { 
    }
    public withFile(file: any): ImportUserListRequestBody {
        this['file'] = file;
        return this;
    }
}