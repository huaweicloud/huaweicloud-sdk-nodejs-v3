

export class ImportFunctionRequestBody {
    private 'func_name'?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    private 'file_code'?: string;
    private 'package'?: string;
    public constructor(funcName?: string, fileName?: string, fileType?: string, fileCode?: string) { 
        this['func_name'] = funcName;
        this['file_name'] = fileName;
        this['file_type'] = fileType;
        this['file_code'] = fileCode;
    }
    public withFuncName(funcName: string): ImportFunctionRequestBody {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withFileName(fileName: string): ImportFunctionRequestBody {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): ImportFunctionRequestBody {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withFileCode(fileCode: string): ImportFunctionRequestBody {
        this['file_code'] = fileCode;
        return this;
    }
    public set fileCode(fileCode: string  | undefined) {
        this['file_code'] = fileCode;
    }
    public get fileCode(): string | undefined {
        return this['file_code'];
    }
    public withPackage(_package: string): ImportFunctionRequestBody {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string  | undefined) {
        this['package'] = _package;
    }
    public get _package(): string | undefined {
        return this['package'];
    }
}