

export class TransferKeyRequestBody {
    private 'key_id'?: string;
    private 'target_keyspace_id'?: string;
    private 'transfer_mode'?: TransferKeyRequestBodyTransferModeEnum | string;
    public constructor(keyId?: string, targetKeyspaceId?: string) { 
        this['key_id'] = keyId;
        this['target_keyspace_id'] = targetKeyspaceId;
    }
    public withKeyId(keyId: string): TransferKeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withTargetKeyspaceId(targetKeyspaceId: string): TransferKeyRequestBody {
        this['target_keyspace_id'] = targetKeyspaceId;
        return this;
    }
    public set targetKeyspaceId(targetKeyspaceId: string  | undefined) {
        this['target_keyspace_id'] = targetKeyspaceId;
    }
    public get targetKeyspaceId(): string | undefined {
        return this['target_keyspace_id'];
    }
    public withTransferMode(transferMode: TransferKeyRequestBodyTransferModeEnum | string): TransferKeyRequestBody {
        this['transfer_mode'] = transferMode;
        return this;
    }
    public set transferMode(transferMode: TransferKeyRequestBodyTransferModeEnum | string  | undefined) {
        this['transfer_mode'] = transferMode;
    }
    public get transferMode(): TransferKeyRequestBodyTransferModeEnum | string | undefined {
        return this['transfer_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransferKeyRequestBodyTransferModeEnum {
    ASSIGN = 'ASSIGN'
}
