import { HeaderParameter } from './HeaderParameter';


export class InvocationHttpParameters {
    private 'header_parameters'?: Array<HeaderParameter>;
    public constructor() { 
    }
    public withHeaderParameters(headerParameters: Array<HeaderParameter>): InvocationHttpParameters {
        this['header_parameters'] = headerParameters;
        return this;
    }
    public set headerParameters(headerParameters: Array<HeaderParameter>  | undefined) {
        this['header_parameters'] = headerParameters;
    }
    public get headerParameters(): Array<HeaderParameter> | undefined {
        return this['header_parameters'];
    }
}