

export class UploadFromObsReqEncryption {
    public enable?: boolean;
    private 'master_key_id'?: string | undefined;
    public constructor() { 
    }
    public withEnable(enable: boolean): UploadFromObsReqEncryption {
        this['enable'] = enable;
        return this;
    }
    public withMasterKeyId(masterKeyId: string): UploadFromObsReqEncryption {
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