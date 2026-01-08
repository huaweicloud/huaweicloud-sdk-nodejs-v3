

export class ImportIpRequestBody {
    public file?: any;
    public constructor() { 
    }
    public withFile(file: any): ImportIpRequestBody {
        this['file'] = file;
        return this;
    }
}