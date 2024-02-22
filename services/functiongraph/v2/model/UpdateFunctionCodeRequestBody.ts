import { FuncCode } from './FuncCode';


export class UpdateFunctionCodeRequestBody {
    private 'code_type'?: UpdateFunctionCodeRequestBodyCodeTypeEnum | string;
    private 'code_url'?: string;
    private 'code_filename'?: string;
    private 'func_code'?: FuncCode;
    private 'depend_list'?: Array<string>;
    private 'depend_version_list'?: Array<string>;
    public constructor(codeType?: string, funcCode?: FuncCode) { 
        this['code_type'] = codeType;
        this['func_code'] = funcCode;
    }
    public withCodeType(codeType: UpdateFunctionCodeRequestBodyCodeTypeEnum | string): UpdateFunctionCodeRequestBody {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: UpdateFunctionCodeRequestBodyCodeTypeEnum | string  | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType(): UpdateFunctionCodeRequestBodyCodeTypeEnum | string | undefined {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): UpdateFunctionCodeRequestBody {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): UpdateFunctionCodeRequestBody {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string  | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename(): string | undefined {
        return this['code_filename'];
    }
    public withFuncCode(funcCode: FuncCode): UpdateFunctionCodeRequestBody {
        this['func_code'] = funcCode;
        return this;
    }
    public set funcCode(funcCode: FuncCode  | undefined) {
        this['func_code'] = funcCode;
    }
    public get funcCode(): FuncCode | undefined {
        return this['func_code'];
    }
    public withDependList(dependList: Array<string>): UpdateFunctionCodeRequestBody {
        this['depend_list'] = dependList;
        return this;
    }
    public set dependList(dependList: Array<string>  | undefined) {
        this['depend_list'] = dependList;
    }
    public get dependList(): Array<string> | undefined {
        return this['depend_list'];
    }
    public withDependVersionList(dependVersionList: Array<string>): UpdateFunctionCodeRequestBody {
        this['depend_version_list'] = dependVersionList;
        return this;
    }
    public set dependVersionList(dependVersionList: Array<string>  | undefined) {
        this['depend_version_list'] = dependVersionList;
    }
    public get dependVersionList(): Array<string> | undefined {
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
    JAR = 'jar',
    CUSTOM_IMAGE_SWR = 'Custom-Image-Swr'
}
