

export class UpdateFunctionRequestBody {
    public code_type?: string;
    public func_code?: any;
    public constructor() {}
    public withCodeType(code_type: string): UpdateFunctionRequestBody {
        this['code_type'] = code_type;
        return this;
    }
    public withFunctionCode(func_code: string): UpdateFunctionRequestBody {
        this['func_code'] = {file:func_code};
        return this;
    }
}