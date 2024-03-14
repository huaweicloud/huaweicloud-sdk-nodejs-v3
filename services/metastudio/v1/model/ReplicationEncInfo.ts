

export class ReplicationEncInfo {
    public algorithm?: string;
    private 'key_id'?: string;
    public iv?: string;
    public constructor() { 
    }
    public withAlgorithm(algorithm: string): ReplicationEncInfo {
        this['algorithm'] = algorithm;
        return this;
    }
    public withKeyId(keyId: string): ReplicationEncInfo {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withIv(iv: string): ReplicationEncInfo {
        this['iv'] = iv;
        return this;
    }
}