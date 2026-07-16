

export class ListDevServerFlavorsRequest {
    private 'server_type'?: string;
    public arch?: string;
    private 'charging_mode'?: string;
    public constructor() { 
    }
    public withServerType(serverType: string): ListDevServerFlavorsRequest {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withArch(arch: string): ListDevServerFlavorsRequest {
        this['arch'] = arch;
        return this;
    }
    public withChargingMode(chargingMode: string): ListDevServerFlavorsRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
}