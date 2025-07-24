

export class ImportFactorRequestBody {
    private 'excel_file'?: any;
    public constructor(excelFile?: any) { 
        this['excel_file'] = excelFile;
    }
    public withExcelFile(excelFile: any): ImportFactorRequestBody {
        this['excel_file'] = excelFile;
        return this;
    }
    public set excelFile(excelFile: any  | undefined) {
        this['excel_file'] = excelFile;
    }
    public get excelFile(): any | undefined {
        return this['excel_file'];
    }
}