

export class AccessConfigurationHttpPath {
    public hostname?: string;
    public path?: string;
    private 'url_match_mode'?: AccessConfigurationHttpPathUrlMatchModeEnum | string;
    public constructor() { 
    }
    public withHostname(hostname: string): AccessConfigurationHttpPath {
        this['hostname'] = hostname;
        return this;
    }
    public withPath(path: string): AccessConfigurationHttpPath {
        this['path'] = path;
        return this;
    }
    public withUrlMatchMode(urlMatchMode: AccessConfigurationHttpPathUrlMatchModeEnum | string): AccessConfigurationHttpPath {
        this['url_match_mode'] = urlMatchMode;
        return this;
    }
    public set urlMatchMode(urlMatchMode: AccessConfigurationHttpPathUrlMatchModeEnum | string  | undefined) {
        this['url_match_mode'] = urlMatchMode;
    }
    public get urlMatchMode(): AccessConfigurationHttpPathUrlMatchModeEnum | string | undefined {
        return this['url_match_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigurationHttpPathUrlMatchModeEnum {
    STARTS_WITH = 'STARTS_WITH',
    REGEX = 'REGEX',
    EQUAL_TO = 'EQUAL_TO'
}
