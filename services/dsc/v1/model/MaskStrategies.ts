

export class MaskStrategies {
    public name?: string;
    public algorithm?: MaskStrategiesAlgorithmEnum | string;
    public parameters?: { [key: string]: object; };
    public constructor(name?: string, algorithm?: string) { 
        this['name'] = name;
        this['algorithm'] = algorithm;
    }
    public withName(name: string): MaskStrategies {
        this['name'] = name;
        return this;
    }
    public withAlgorithm(algorithm: MaskStrategiesAlgorithmEnum | string): MaskStrategies {
        this['algorithm'] = algorithm;
        return this;
    }
    public withParameters(parameters: { [key: string]: object; }): MaskStrategies {
        this['parameters'] = parameters;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MaskStrategiesAlgorithmEnum {
    SHA256 = 'SHA256',
    SHA512 = 'SHA512',
    AES = 'AES',
    PRESNM = 'PRESNM',
    MASKNM = 'MASKNM',
    PRESXY = 'PRESXY',
    MASKXY = 'MASKXY',
    SYMBOL = 'SYMBOL',
    KEYWORD = 'KEYWORD',
    NUMERIC = 'NUMERIC'
}
