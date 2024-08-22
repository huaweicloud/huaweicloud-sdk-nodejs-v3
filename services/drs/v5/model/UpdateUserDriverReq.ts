

export class UpdateUserDriverReq {
    private 'driver_name'?: string;
    private 'driver_type'?: UpdateUserDriverReqDriverTypeEnum | string;
    public constructor(driverName?: string, driverType?: string) { 
        this['driver_name'] = driverName;
        this['driver_type'] = driverType;
    }
    public withDriverName(driverName: string): UpdateUserDriverReq {
        this['driver_name'] = driverName;
        return this;
    }
    public set driverName(driverName: string  | undefined) {
        this['driver_name'] = driverName;
    }
    public get driverName(): string | undefined {
        return this['driver_name'];
    }
    public withDriverType(driverType: UpdateUserDriverReqDriverTypeEnum | string): UpdateUserDriverReq {
        this['driver_type'] = driverType;
        return this;
    }
    public set driverType(driverType: UpdateUserDriverReqDriverTypeEnum | string  | undefined) {
        this['driver_type'] = driverType;
    }
    public get driverType(): UpdateUserDriverReqDriverTypeEnum | string | undefined {
        return this['driver_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateUserDriverReqDriverTypeEnum {
    DB2 = 'db2',
    INFORMIX = 'informix'
}
