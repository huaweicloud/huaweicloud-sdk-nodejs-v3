

export class DeleteDriverReq {
    private 'driver_names'?: Array<string>;
    public constructor(driverNames?: Array<string>) { 
        this['driver_names'] = driverNames;
    }
    public withDriverNames(driverNames: Array<string>): DeleteDriverReq {
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