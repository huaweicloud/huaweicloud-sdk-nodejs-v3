

export class BackendConstant {
    public name?: string;
    public type?: BackendConstantTypeEnum | string;
    public position?: BackendConstantPositionEnum | string;
    public description?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): BackendConstant {
        this['name'] = name;
        return this;
    }
    public withType(type: BackendConstantTypeEnum | string): BackendConstant {
        this['type'] = type;
        return this;
    }
    public withPosition(position: BackendConstantPositionEnum | string): BackendConstant {
        this['position'] = position;
        return this;
    }
    public withDescription(description: string): BackendConstant {
        this['description'] = description;
        return this;
    }
    public withValue(value: string): BackendConstant {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackendConstantTypeEnum {
    REQUEST_PARAMETER_TYPE_NUMBER = 'REQUEST_PARAMETER_TYPE_NUMBER',
    REQUEST_PARAMETER_TYPE_STRING = 'REQUEST_PARAMETER_TYPE_STRING'
}
/**
    * @export
    * @enum {string}
    */
export enum BackendConstantPositionEnum {
    REQUEST_PARAMETER_POSITION_PATH = 'REQUEST_PARAMETER_POSITION_PATH',
    REQUEST_PARAMETER_POSITION_HEADER = 'REQUEST_PARAMETER_POSITION_HEADER',
    REQUEST_PARAMETER_POSITION_QUERY = 'REQUEST_PARAMETER_POSITION_QUERY'
}
