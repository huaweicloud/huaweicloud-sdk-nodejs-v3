

export class CreateGraphReqGraphEncryption {
    public enable?: boolean;
    private 'master_key_id'?: string | undefined;
    public constructor() { 
    }
    public withEnable(enable: boolean): CreateGraphReqGraphEncryption {
        this['enable'] = enable;
        return this;
    }
    public withMasterKeyId(masterKeyId: string): CreateGraphReqGraphEncryption {
        this['master_key_id'] = masterKeyId;
        return this;
    }
    public set masterKeyId(masterKeyId: string | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId() {
        return this['master_key_id'];
    }
}