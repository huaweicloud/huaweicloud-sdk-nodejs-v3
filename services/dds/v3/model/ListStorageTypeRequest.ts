

export class ListStorageTypeRequest {
    private 'engine_name'?: ListStorageTypeRequestEngineNameEnum | string;
    public constructor() { 
    }
    public withEngineName(engineName: ListStorageTypeRequestEngineNameEnum | string): ListStorageTypeRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: ListStorageTypeRequestEngineNameEnum | string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): ListStorageTypeRequestEngineNameEnum | string | undefined {
        return this['engine_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListStorageTypeRequestEngineNameEnum {
    DDS_COMMUNITY = 'DDS-Community',
    DDS_ENHANCED = 'DDS-Enhanced'
}
