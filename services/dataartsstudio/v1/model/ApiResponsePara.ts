

export class ApiResponsePara {
    public name?: string;
    public field?: string;
    public type?: ApiResponseParaTypeEnum | string;
    public description?: string;
    private 'example_value'?: string;
    public constructor() { 
    }
    public withName(name: string): ApiResponsePara {
        this['name'] = name;
        return this;
    }
    public withField(field: string): ApiResponsePara {
        this['field'] = field;
        return this;
    }
    public withType(type: ApiResponseParaTypeEnum | string): ApiResponsePara {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ApiResponsePara {
        this['description'] = description;
        return this;
    }
    public withExampleValue(exampleValue: string): ApiResponsePara {
        this['example_value'] = exampleValue;
        return this;
    }
    public set exampleValue(exampleValue: string  | undefined) {
        this['example_value'] = exampleValue;
    }
    public get exampleValue(): string | undefined {
        return this['example_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiResponseParaTypeEnum {
    REQUEST_PARAMETER_TYPE_NUMBER = 'REQUEST_PARAMETER_TYPE_NUMBER',
    REQUEST_PARAMETER_TYPE_STRING = 'REQUEST_PARAMETER_TYPE_STRING'
}
