

export class ImportBatchCreateJobsRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ImportBatchCreateJobsRequestBody {
        this['file'] = file;
        return this;
    }
}