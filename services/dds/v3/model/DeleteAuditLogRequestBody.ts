

export class DeleteAuditLogRequestBody {
    private 'file_names'?: Array<string>;
    public constructor(fileNames?: Array<string>) { 
        this['file_names'] = fileNames;
    }
    public withFileNames(fileNames: Array<string>): DeleteAuditLogRequestBody {
        this['file_names'] = fileNames;
        return this;
    }
    public set fileNames(fileNames: Array<string>  | undefined) {
        this['file_names'] = fileNames;
    }
    public get fileNames(): Array<string> | undefined {
        return this['file_names'];
    }
}