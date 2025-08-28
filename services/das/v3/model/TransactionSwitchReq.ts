

export class TransactionSwitchReq {
    private 'switch_status'?: TransactionSwitchReqSwitchStatusEnum | string;
    private 'datastore_type'?: TransactionSwitchReqDatastoreTypeEnum | string;
    public constructor(switchStatus?: string, datastoreType?: string) { 
        this['switch_status'] = switchStatus;
        this['datastore_type'] = datastoreType;
    }
    public withSwitchStatus(switchStatus: TransactionSwitchReqSwitchStatusEnum | string): TransactionSwitchReq {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: TransactionSwitchReqSwitchStatusEnum | string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): TransactionSwitchReqSwitchStatusEnum | string | undefined {
        return this['switch_status'];
    }
    public withDatastoreType(datastoreType: TransactionSwitchReqDatastoreTypeEnum | string): TransactionSwitchReq {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: TransactionSwitchReqDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): TransactionSwitchReqDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransactionSwitchReqSwitchStatusEnum {
    ENABLED = 'Enabled',
    DISABLED = 'Disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum TransactionSwitchReqDatastoreTypeEnum {
    MYSQL = 'MySQL'
}
