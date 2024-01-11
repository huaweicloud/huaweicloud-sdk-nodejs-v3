

export class ImportCatalogsRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ImportCatalogsRequestBody {
        this['file'] = file;
        return this;
    }
}