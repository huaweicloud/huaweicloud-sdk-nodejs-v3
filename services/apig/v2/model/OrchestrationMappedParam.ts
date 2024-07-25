

export class OrchestrationMappedParam {
    private 'mapped_param_name'?: string;
    private 'mapped_param_type'?: OrchestrationMappedParamMappedParamTypeEnum | string;
    private 'mapped_param_location'?: OrchestrationMappedParamMappedParamLocationEnum | string;
    public constructor(mappedParamName?: string, mappedParamType?: string, mappedParamLocation?: string) { 
        this['mapped_param_name'] = mappedParamName;
        this['mapped_param_type'] = mappedParamType;
        this['mapped_param_location'] = mappedParamLocation;
    }
    public withMappedParamName(mappedParamName: string): OrchestrationMappedParam {
        this['mapped_param_name'] = mappedParamName;
        return this;
    }
    public set mappedParamName(mappedParamName: string  | undefined) {
        this['mapped_param_name'] = mappedParamName;
    }
    public get mappedParamName(): string | undefined {
        return this['mapped_param_name'];
    }
    public withMappedParamType(mappedParamType: OrchestrationMappedParamMappedParamTypeEnum | string): OrchestrationMappedParam {
        this['mapped_param_type'] = mappedParamType;
        return this;
    }
    public set mappedParamType(mappedParamType: OrchestrationMappedParamMappedParamTypeEnum | string  | undefined) {
        this['mapped_param_type'] = mappedParamType;
    }
    public get mappedParamType(): OrchestrationMappedParamMappedParamTypeEnum | string | undefined {
        return this['mapped_param_type'];
    }
    public withMappedParamLocation(mappedParamLocation: OrchestrationMappedParamMappedParamLocationEnum | string): OrchestrationMappedParam {
        this['mapped_param_location'] = mappedParamLocation;
        return this;
    }
    public set mappedParamLocation(mappedParamLocation: OrchestrationMappedParamMappedParamLocationEnum | string  | undefined) {
        this['mapped_param_location'] = mappedParamLocation;
    }
    public get mappedParamLocation(): OrchestrationMappedParamMappedParamLocationEnum | string | undefined {
        return this['mapped_param_location'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OrchestrationMappedParamMappedParamTypeEnum {
    STRING = 'string',
    NUMBER = 'number'
}
/**
    * @export
    * @enum {string}
    */
export enum OrchestrationMappedParamMappedParamLocationEnum {
    QUERY = 'query',
    HEADER = 'header'
}
