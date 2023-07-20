

export class ListFlavorInfosRequest {
    private 'engine_name'?: ListFlavorInfosRequestEngineNameEnum | string;
    private 'engine_version'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withEngineName(engineName: ListFlavorInfosRequestEngineNameEnum | string): ListFlavorInfosRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: ListFlavorInfosRequestEngineNameEnum | string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): ListFlavorInfosRequestEngineNameEnum | string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): ListFlavorInfosRequest {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withOffset(offset: number): ListFlavorInfosRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFlavorInfosRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlavorInfosRequestEngineNameEnum {
    DDS_COMMUNITY = 'DDS-Community',
    DDS_ENHANCED = 'DDS-Enhanced'
}
