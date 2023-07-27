import { MicroServiceInfoCSEBase } from './MicroServiceInfoCSEBase';


export class MicroServiceInfoCSECreate {
    private 'engine_id'?: string;
    private 'service_id'?: string;
    public version?: string;
    public constructor(engineId?: string, serviceId?: string, version?: string) { 
        this['engine_id'] = engineId;
        this['service_id'] = serviceId;
        this['version'] = version;
    }
    public withEngineId(engineId: string): MicroServiceInfoCSECreate {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withServiceId(serviceId: string): MicroServiceInfoCSECreate {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withVersion(version: string): MicroServiceInfoCSECreate {
        this['version'] = version;
        return this;
    }
}