

export class UpdateDriverReq {
    private 'driver_name'?: string;
    public constructor(driverName?: string) { 
        this['driver_name'] = driverName;
    }
    public withDriverName(driverName: string): UpdateDriverReq {
        this['driver_name'] = driverName;
        return this;
    }
    public set driverName(driverName: string  | undefined) {
        this['driver_name'] = driverName;
    }
    public get driverName(): string | undefined {
        return this['driver_name'];
    }
}