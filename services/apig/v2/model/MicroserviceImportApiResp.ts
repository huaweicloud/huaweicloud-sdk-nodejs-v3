

export class MicroserviceImportApiResp {
    public name?: string;
    private 'req_uri'?: string;
    private 'req_method'?: string;
    public id?: string;
    private 'match_mode'?: MicroserviceImportApiRespMatchModeEnum | string;
    public constructor() { 
    }
    public withName(name: string): MicroserviceImportApiResp {
        this['name'] = name;
        return this;
    }
    public withReqUri(reqUri: string): MicroserviceImportApiResp {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withReqMethod(reqMethod: string): MicroserviceImportApiResp {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): string | undefined {
        return this['req_method'];
    }
    public withId(id: string): MicroserviceImportApiResp {
        this['id'] = id;
        return this;
    }
    public withMatchMode(matchMode: MicroserviceImportApiRespMatchModeEnum | string): MicroserviceImportApiResp {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: MicroserviceImportApiRespMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): MicroserviceImportApiRespMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MicroserviceImportApiRespMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
