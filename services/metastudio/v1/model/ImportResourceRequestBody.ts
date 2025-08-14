

export class ImportResourceRequestBody {
    public file?: any;
    public constructor() { 
    }
    public withFile(file: any): ImportResourceRequestBody {
        this['file'] = file;
        return this;
    }
}