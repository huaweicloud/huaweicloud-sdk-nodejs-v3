

export class ImportDataServiceExcelRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ImportDataServiceExcelRequestBody {
        this['file'] = file;
        return this;
    }
}