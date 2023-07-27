import { MicroServiceInfoCSEBase } from './MicroServiceInfoCSEBase';


export class MicroServiceInfoCSE {
    private 'engine_id'?: string;
    private 'service_id'?: string;
    private 'engine_name'?: string;
    private 'service_name'?: string;
    private 'register_address'?: string;
    private 'cse_app_id'?: string;
    public version?: string;
    public constructor(engineId?: string, serviceId?: string) { 
        this['engine_id'] = engineId;
        this['service_id'] = serviceId;
    }
    public withEngineId(engineId: string): MicroServiceInfoCSE {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withServiceId(serviceId: string): MicroServiceInfoCSE {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withEngineName(engineName: string): MicroServiceInfoCSE {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withServiceName(serviceName: string): MicroServiceInfoCSE {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withRegisterAddress(registerAddress: string): MicroServiceInfoCSE {
        this['register_address'] = registerAddress;
        return this;
    }
    public set registerAddress(registerAddress: string  | undefined) {
        this['register_address'] = registerAddress;
    }
    public get registerAddress(): string | undefined {
        return this['register_address'];
    }
    public withCseAppId(cseAppId: string): MicroServiceInfoCSE {
        this['cse_app_id'] = cseAppId;
        return this;
    }
    public set cseAppId(cseAppId: string  | undefined) {
        this['cse_app_id'] = cseAppId;
    }
    public get cseAppId(): string | undefined {
        return this['cse_app_id'];
    }
    public withVersion(version: string): MicroServiceInfoCSE {
        this['version'] = version;
        return this;
    }
}