

export class ExportFunctionRequest {
    private 'function_urn': string | undefined;
    public config?: boolean;
    public code?: boolean;
    public type?: ExportFunctionRequestTypeEnum;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ExportFunctionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withConfig(config: boolean): ExportFunctionRequest {
        this['config'] = config;
        return this;
    }
    public withCode(code: boolean): ExportFunctionRequest {
        this['code'] = code;
        return this;
    }
    public withType(type: ExportFunctionRequestTypeEnum): ExportFunctionRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportFunctionRequestTypeEnum {
    TYPE = 'type',
    CODE = 'code'
}
