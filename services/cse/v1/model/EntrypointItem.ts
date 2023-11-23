

export class EntrypointItem {
    public masterEntrypoint?: string;
    public masterEntrypointIpv6?: string;
    private 'slave_entrypoint'?: string;
    public slaveEntrypointIpv6?: string;
    public type?: EntrypointItemTypeEnum | string;
    public constructor() { 
    }
    public withMasterEntrypoint(masterEntrypoint: string): EntrypointItem {
        this['masterEntrypoint'] = masterEntrypoint;
        return this;
    }
    public withMasterEntrypointIpv6(masterEntrypointIpv6: string): EntrypointItem {
        this['masterEntrypointIpv6'] = masterEntrypointIpv6;
        return this;
    }
    public withSlaveEntrypoint(slaveEntrypoint: string): EntrypointItem {
        this['slave_entrypoint'] = slaveEntrypoint;
        return this;
    }
    public set slaveEntrypoint(slaveEntrypoint: string  | undefined) {
        this['slave_entrypoint'] = slaveEntrypoint;
    }
    public get slaveEntrypoint(): string | undefined {
        return this['slave_entrypoint'];
    }
    public withSlaveEntrypointIpv6(slaveEntrypointIpv6: string): EntrypointItem {
        this['slaveEntrypointIpv6'] = slaveEntrypointIpv6;
        return this;
    }
    public withType(type: EntrypointItemTypeEnum | string): EntrypointItem {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EntrypointItemTypeEnum {
    REGISTRY = 'REGISTRY',
    SERVICE = 'SERVICE'
}
