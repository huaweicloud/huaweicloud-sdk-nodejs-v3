

export class RequestPara {
    public name?: string;
    public position?: RequestParaPositionEnum | string;
    public type?: RequestParaTypeEnum | string;
    public description?: string;
    public necessary?: boolean;
    private 'example_value'?: string;
    private 'default_value'?: string;
    public constructor() { 
    }
    public withName(name: string): RequestPara {
        this['name'] = name;
        return this;
    }
    public withPosition(position: RequestParaPositionEnum | string): RequestPara {
        this['position'] = position;
        return this;
    }
    public withType(type: RequestParaTypeEnum | string): RequestPara {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): RequestPara {
        this['description'] = description;
        return this;
    }
    public withNecessary(necessary: boolean): RequestPara {
        this['necessary'] = necessary;
        return this;
    }
    public withExampleValue(exampleValue: string): RequestPara {
        this['example_value'] = exampleValue;
        return this;
    }
    public set exampleValue(exampleValue: string  | undefined) {
        this['example_value'] = exampleValue;
    }
    public get exampleValue(): string | undefined {
        return this['example_value'];
    }
    public withDefaultValue(defaultValue: string): RequestPara {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RequestParaPositionEnum {
    REQUEST_PARAMETER_POSITION_PATH = 'REQUEST_PARAMETER_POSITION_PATH',
    REQUEST_PARAMETER_POSITION_HEADER = 'REQUEST_PARAMETER_POSITION_HEADER',
    REQUEST_PARAMETER_POSITION_QUERY = 'REQUEST_PARAMETER_POSITION_QUERY'
}
/**
    * @export
    * @enum {string}
    */
export enum RequestParaTypeEnum {
    REQUEST_PARAMETER_TYPE_NUMBER = 'REQUEST_PARAMETER_TYPE_NUMBER',
    REQUEST_PARAMETER_TYPE_STRING = 'REQUEST_PARAMETER_TYPE_STRING'
}
