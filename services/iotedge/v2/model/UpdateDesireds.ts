

export class UpdateDesireds {
    private 'device_name'?: string;
    public config?: object;
    public constructor() { 
    }
    public withDeviceName(deviceName: string): UpdateDesireds {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withConfig(config: object): UpdateDesireds {
        this['config'] = config;
        return this;
    }
}