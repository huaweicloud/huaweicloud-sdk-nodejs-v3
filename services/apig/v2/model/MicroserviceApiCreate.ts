

export class MicroserviceApiCreate {
    public name?: string;
    private 'req_method'?: MicroserviceApiCreateReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'match_mode'?: MicroserviceApiCreateMatchModeEnum | string;
    public constructor(reqUri?: string) { 
        this['req_uri'] = reqUri;
    }
    public withName(name: string): MicroserviceApiCreate {
        this['name'] = name;
        return this;
    }
    public withReqMethod(reqMethod: MicroserviceApiCreateReqMethodEnum | string): MicroserviceApiCreate {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: MicroserviceApiCreateReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): MicroserviceApiCreateReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): MicroserviceApiCreate {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withMatchMode(matchMode: MicroserviceApiCreateMatchModeEnum | string): MicroserviceApiCreate {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: MicroserviceApiCreateMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): MicroserviceApiCreateMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MicroserviceApiCreateReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
/**
    * @export
    * @enum {string}
    */
export enum MicroserviceApiCreateMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
