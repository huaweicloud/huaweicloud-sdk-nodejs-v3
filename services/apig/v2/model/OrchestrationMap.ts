import { OrchestrationMapParamRange } from './OrchestrationMapParamRange';


export class OrchestrationMap {
    private 'map_param_list'?: Array<string>;
    private 'map_param_range'?: OrchestrationMapParamRange;
    private 'mapped_param_value'?: string;
    private 'intercept_length'?: number;
    public constructor() { 
    }
    public withMapParamList(mapParamList: Array<string>): OrchestrationMap {
        this['map_param_list'] = mapParamList;
        return this;
    }
    public set mapParamList(mapParamList: Array<string>  | undefined) {
        this['map_param_list'] = mapParamList;
    }
    public get mapParamList(): Array<string> | undefined {
        return this['map_param_list'];
    }
    public withMapParamRange(mapParamRange: OrchestrationMapParamRange): OrchestrationMap {
        this['map_param_range'] = mapParamRange;
        return this;
    }
    public set mapParamRange(mapParamRange: OrchestrationMapParamRange  | undefined) {
        this['map_param_range'] = mapParamRange;
    }
    public get mapParamRange(): OrchestrationMapParamRange | undefined {
        return this['map_param_range'];
    }
    public withMappedParamValue(mappedParamValue: string): OrchestrationMap {
        this['mapped_param_value'] = mappedParamValue;
        return this;
    }
    public set mappedParamValue(mappedParamValue: string  | undefined) {
        this['mapped_param_value'] = mappedParamValue;
    }
    public get mappedParamValue(): string | undefined {
        return this['mapped_param_value'];
    }
    public withInterceptLength(interceptLength: number): OrchestrationMap {
        this['intercept_length'] = interceptLength;
        return this;
    }
    public set interceptLength(interceptLength: number  | undefined) {
        this['intercept_length'] = interceptLength;
    }
    public get interceptLength(): number | undefined {
        return this['intercept_length'];
    }
}