

export class EndpointsRes {
    private 'dev_service'?: string;
    public service?: EndpointsResServiceEnum | string;
    public uri?: string;
    private 'key_pair_names'?: Array<string>;
    public constructor() { 
    }
    public withDevService(devService: string): EndpointsRes {
        this['dev_service'] = devService;
        return this;
    }
    public set devService(devService: string  | undefined) {
        this['dev_service'] = devService;
    }
    public get devService(): string | undefined {
        return this['dev_service'];
    }
    public withService(service: EndpointsResServiceEnum | string): EndpointsRes {
        this['service'] = service;
        return this;
    }
    public withUri(uri: string): EndpointsRes {
        this['uri'] = uri;
        return this;
    }
    public withKeyPairNames(keyPairNames: Array<string>): EndpointsRes {
        this['key_pair_names'] = keyPairNames;
        return this;
    }
    public set keyPairNames(keyPairNames: Array<string>  | undefined) {
        this['key_pair_names'] = keyPairNames;
    }
    public get keyPairNames(): Array<string> | undefined {
        return this['key_pair_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EndpointsResServiceEnum {
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH'
}
