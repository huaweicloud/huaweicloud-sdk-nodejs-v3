

export class FuncDestinationConfig {
    public destination?: FuncDestinationConfigDestinationEnum | string;
    public param?: string;
    public constructor() { 
    }
    public withDestination(destination: FuncDestinationConfigDestinationEnum | string): FuncDestinationConfig {
        this['destination'] = destination;
        return this;
    }
    public withParam(param: string): FuncDestinationConfig {
        this['param'] = param;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FuncDestinationConfigDestinationEnum {
    OBS = 'OBS',
    SMN = 'SMN',
    DIS = 'DIS',
    FUNCTIONGRAPH = 'FunctionGraph'
}
