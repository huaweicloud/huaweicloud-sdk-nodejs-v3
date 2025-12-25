

export class ShowAdhocQueryResultResponseBodyTips {
    private 'error_code'?: string;
    private 'error_key'?: string;
    private 'module_name'?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): ShowAdhocQueryResultResponseBodyTips {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorKey(errorKey: string): ShowAdhocQueryResultResponseBodyTips {
        this['error_key'] = errorKey;
        return this;
    }
    public set errorKey(errorKey: string  | undefined) {
        this['error_key'] = errorKey;
    }
    public get errorKey(): string | undefined {
        return this['error_key'];
    }
    public withModuleName(moduleName: string): ShowAdhocQueryResultResponseBodyTips {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
}