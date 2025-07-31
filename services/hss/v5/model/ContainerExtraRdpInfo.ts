

export class ContainerExtraRdpInfo {
    private 'proto_env'?: string;
    public system?: string;
    public constructor() { 
    }
    public withProtoEnv(protoEnv: string): ContainerExtraRdpInfo {
        this['proto_env'] = protoEnv;
        return this;
    }
    public set protoEnv(protoEnv: string  | undefined) {
        this['proto_env'] = protoEnv;
    }
    public get protoEnv(): string | undefined {
        return this['proto_env'];
    }
    public withSystem(system: string): ContainerExtraRdpInfo {
        this['system'] = system;
        return this;
    }
}