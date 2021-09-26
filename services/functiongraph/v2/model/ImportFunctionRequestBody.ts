

export class ImportFunctionRequestBody {
    private 'func_name': string | undefined;
    private 'file_name': string | undefined;
    private 'file_type': string | undefined;
    private 'file_code': string | undefined;
    public constructor(funcName?: any, fileName?: any, fileType?: any, fileCode?: any) { 
        this['func_name'] = funcName;
        this['file_name'] = fileName;
        this['file_type'] = fileType;
        this['file_code'] = fileCode;
    }
    public withFuncName(funcName: string): ImportFunctionRequestBody {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName() {
        return this['func_name'];
    }
    public withFileName(fileName: string): ImportFunctionRequestBody {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withFileType(fileType: string): ImportFunctionRequestBody {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType() {
        return this['file_type'];
    }
    public withFileCode(fileCode: string): ImportFunctionRequestBody {
        this['file_code'] = fileCode;
        return this;
    }
    public set fileCode(fileCode: string | undefined) {
        this['file_code'] = fileCode;
    }
    public get fileCode() {
        return this['file_code'];
    }
}