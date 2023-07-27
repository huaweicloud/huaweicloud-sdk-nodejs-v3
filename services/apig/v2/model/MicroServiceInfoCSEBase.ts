

export class MicroServiceInfoCSEBase {
    private 'engine_id'?: string;
    private 'service_id'?: string;
    public constructor(engineId?: string, serviceId?: string) { 
        this['engine_id'] = engineId;
        this['service_id'] = serviceId;
    }
    public withEngineId(engineId: string): MicroServiceInfoCSEBase {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withServiceId(serviceId: string): MicroServiceInfoCSEBase {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
}