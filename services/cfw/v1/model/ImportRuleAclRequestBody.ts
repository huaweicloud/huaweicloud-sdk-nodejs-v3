

export class ImportRuleAclRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): ImportRuleAclRequestBody {
        this['file'] = file;
        return this;
    }
}