

export class EndpointsReq {
    public service?: string;
    private 'key_pair_names'?: Array<string>;
    public constructor() { 
    }
    public withService(service: string): EndpointsReq {
        this['service'] = service;
        return this;
    }
    public withKeyPairNames(keyPairNames: Array<string>): EndpointsReq {
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