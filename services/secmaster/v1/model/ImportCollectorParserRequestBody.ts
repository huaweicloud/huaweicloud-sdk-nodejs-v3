

export class ImportCollectorParserRequestBody {
    public files?: any;
    public constructor(files?: any) { 
        this['files'] = files;
    }
    public withFiles(files: any): ImportCollectorParserRequestBody {
        this['files'] = files;
        return this;
    }
}