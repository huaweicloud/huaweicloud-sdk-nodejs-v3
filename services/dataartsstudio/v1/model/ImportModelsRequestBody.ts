

export class ImportModelsRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ImportModelsRequestBody {
        this['file'] = file;
        return this;
    }
}