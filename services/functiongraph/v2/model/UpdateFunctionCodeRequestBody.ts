import { FuncCode } from './FuncCode';


export class UpdateFunctionCodeRequestBody {
    private 'code_type': UpdateFunctionCodeRequestBodyCodeTypeEnum | undefined;
    private 'code_url'?: string | undefined;
    private 'code_filename'?: string | undefined;
    private 'func_code': FuncCode | undefined;
    private 'depend_list'?: Array<string> | undefined;
    private 'depend_version_list'?: Array<string> | undefined;
    public constructor(codeType?: any, funcCode?: any) { 
        this['code_type'] = codeType;
        this['func_code'] = funcCode;
    }
    public withCodeType(codeType: UpdateFunctionCodeRequestBodyCodeTypeEnum): UpdateFunctionCodeRequestBody {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: UpdateFunctionCodeRequestBodyCodeTypeEnum | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType() {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): UpdateFunctionCodeRequestBody {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl() {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): UpdateFunctionCodeRequestBody {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename() {
        return this['code_filename'];
    }
    public withFuncCode(funcCode: FuncCode): UpdateFunctionCodeRequestBody {
        this['func_code'] = funcCode;
        return this;
    }
    public set funcCode(funcCode: FuncCode | undefined) {
        this['func_code'] = funcCode;
    }
    public get funcCode() {
        return this['func_code'];
    }
    public withDependList(dependList: Array<string>): UpdateFunctionCodeRequestBody {
        this['depend_list'] = dependList;
        return this;
    }
    public set dependList(dependList: Array<string> | undefined) {
        this['depend_list'] = dependList;
    }
    public get dependList() {
        return this['depend_list'];
    }
    public withDependVersionList(dependVersionList: Array<string>): UpdateFunctionCodeRequestBody {
        this['depend_version_list'] = dependVersionList;
        return this;
    }
    public set dependVersionList(dependVersionList: Array<string> | undefined) {
        this['depend_version_list'] = dependVersionList;
    }
    public get dependVersionList() {
        return this['depend_version_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFunctionCodeRequestBodyCodeTypeEnum {
    INLINE = 'inline',
    ZIP = 'zip',
    OBS = 'obs',
    JAR = 'jar'
}
