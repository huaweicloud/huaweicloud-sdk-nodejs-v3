

export class DriverInfo {
    private 'driver_name'?: string;
    private 'last_modified'?: string;
    public size?: number;
    public constructor() { 
    }
    public withDriverName(driverName: string): DriverInfo {
        this['driver_name'] = driverName;
        return this;
    }
    public set driverName(driverName: string  | undefined) {
        this['driver_name'] = driverName;
    }
    public get driverName(): string | undefined {
        return this['driver_name'];
    }
    public withLastModified(lastModified: string): DriverInfo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): string | undefined {
        return this['last_modified'];
    }
    public withSize(size: number): DriverInfo {
        this['size'] = size;
        return this;
    }
}