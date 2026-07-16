

export class SSHReq {
    private 'key_pair_names'?: Array<string>;
    public constructor() { 
    }
    public withKeyPairNames(keyPairNames: Array<string>): SSHReq {
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