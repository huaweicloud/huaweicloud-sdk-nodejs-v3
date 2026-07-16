

export class ServerStartRequest {
    public arch?: ServerStartRequestArchEnum | string;
    private 'charging_mode'?: ServerStartRequestChargingModeEnum | string;
    private 'server_type'?: ServerStartRequestServerTypeEnum | string;
    public constructor() { 
    }
    public withArch(arch: ServerStartRequestArchEnum | string): ServerStartRequest {
        this['arch'] = arch;
        return this;
    }
    public withChargingMode(chargingMode: ServerStartRequestChargingModeEnum | string): ServerStartRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: ServerStartRequestChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): ServerStartRequestChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withServerType(serverType: ServerStartRequestServerTypeEnum | string): ServerStartRequest {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: ServerStartRequestServerTypeEnum | string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): ServerStartRequestServerTypeEnum | string | undefined {
        return this['server_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerStartRequestArchEnum {
    ARM = 'ARM',
    X86 = 'X86'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerStartRequestChargingModeEnum {
    COMMON = 'COMMON',
    POST_PAID = 'POST_PAID',
    PRE_PAID = 'PRE_PAID'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerStartRequestServerTypeEnum {
    BMS = 'BMS',
    ECS = 'ECS',
    HPS = 'HPS'
}
