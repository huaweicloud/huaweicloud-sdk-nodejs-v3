

export class ConnectionConfig {
    private 'driver_name'?: string;
    public constructor() { 
    }
    public withDriverName(driverName: string): ConnectionConfig {
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