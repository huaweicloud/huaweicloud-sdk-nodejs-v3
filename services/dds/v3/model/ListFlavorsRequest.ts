

export class ListFlavorsRequest {
    public region?: string;
    private 'engine_name'?: ListFlavorsRequestEngineNameEnum | string;
    public constructor() { 
    }
    public withRegion(region: string): ListFlavorsRequest {
        this['region'] = region;
        return this;
    }
    public withEngineName(engineName: ListFlavorsRequestEngineNameEnum | string): ListFlavorsRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: ListFlavorsRequestEngineNameEnum | string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): ListFlavorsRequestEngineNameEnum | string | undefined {
        return this['engine_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlavorsRequestEngineNameEnum {
    DDS_COMMUNITY = 'DDS-Community',
    DDS_ENHANCED = 'DDS-Enhanced'
}
