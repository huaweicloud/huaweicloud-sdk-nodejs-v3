

export class ChangeSqlLimitSwitchStatusBody {
    private 'switch_status'?: ChangeSqlLimitSwitchStatusBodySwitchStatusEnum | string;
    private 'datastore_type'?: ChangeSqlLimitSwitchStatusBodyDatastoreTypeEnum | string;
    public constructor(switchStatus?: string, datastoreType?: string) { 
        this['switch_status'] = switchStatus;
        this['datastore_type'] = datastoreType;
    }
    public withSwitchStatus(switchStatus: ChangeSqlLimitSwitchStatusBodySwitchStatusEnum | string): ChangeSqlLimitSwitchStatusBody {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: ChangeSqlLimitSwitchStatusBodySwitchStatusEnum | string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): ChangeSqlLimitSwitchStatusBodySwitchStatusEnum | string | undefined {
        return this['switch_status'];
    }
    public withDatastoreType(datastoreType: ChangeSqlLimitSwitchStatusBodyDatastoreTypeEnum | string): ChangeSqlLimitSwitchStatusBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ChangeSqlLimitSwitchStatusBodyDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ChangeSqlLimitSwitchStatusBodyDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeSqlLimitSwitchStatusBodySwitchStatusEnum {
    ON = 'ON',
    OFF = 'OFF'
}
/**
    * @export
    * @enum {string}
    */
export enum ChangeSqlLimitSwitchStatusBodyDatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL'
}
