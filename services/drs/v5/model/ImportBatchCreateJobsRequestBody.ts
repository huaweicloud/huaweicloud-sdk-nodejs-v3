

export class ImportBatchCreateJobsRequestBody {
    public file?: any;
    public type?: string;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ImportBatchCreateJobsRequestBody {
        this['file'] = file;
        return this;
    }
    public withType(type: string): ImportBatchCreateJobsRequestBody {
        this['type'] = type;
        return this;
    }
}