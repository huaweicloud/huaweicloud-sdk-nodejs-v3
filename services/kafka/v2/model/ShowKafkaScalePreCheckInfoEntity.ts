

export class ShowKafkaScalePreCheckInfoEntity {
    public name?: string;
    public success?: boolean;
    public reason?: string;
    public risk?: string;
    public constructor() { 
    }
    public withName(name: string): ShowKafkaScalePreCheckInfoEntity {
        this['name'] = name;
        return this;
    }
    public withSuccess(success: boolean): ShowKafkaScalePreCheckInfoEntity {
        this['success'] = success;
        return this;
    }
    public withReason(reason: string): ShowKafkaScalePreCheckInfoEntity {
        this['reason'] = reason;
        return this;
    }
    public withRisk(risk: string): ShowKafkaScalePreCheckInfoEntity {
        this['risk'] = risk;
        return this;
    }
}