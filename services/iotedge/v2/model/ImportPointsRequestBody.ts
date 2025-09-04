

export class ImportPointsRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ImportPointsRequestBody {
        this['file'] = file;
        return this;
    }
}