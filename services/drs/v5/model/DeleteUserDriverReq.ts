

export class DeleteUserDriverReq {
    private 'driver_type'?: DeleteUserDriverReqDriverTypeEnum | string;
    private 'driver_names'?: Array<string>;
    public constructor(driverType?: string, driverNames?: Array<string>) { 
        this['driver_type'] = driverType;
        this['driver_names'] = driverNames;
    }
    public withDriverType(driverType: DeleteUserDriverReqDriverTypeEnum | string): DeleteUserDriverReq {
        this['driver_type'] = driverType;
        return this;
    }
    public set driverType(driverType: DeleteUserDriverReqDriverTypeEnum | string  | undefined) {
        this['driver_type'] = driverType;
    }
    public get driverType(): DeleteUserDriverReqDriverTypeEnum | string | undefined {
        return this['driver_type'];
    }
    public withDriverNames(driverNames: Array<string>): DeleteUserDriverReq {
        this['driver_names'] = driverNames;
        return this;
    }
    public set driverNames(driverNames: Array<string>  | undefined) {
        this['driver_names'] = driverNames;
    }
    public get driverNames(): Array<string> | undefined {
        return this['driver_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteUserDriverReqDriverTypeEnum {
    DB2 = 'db2',
    INFORMIX = 'informix'
}
