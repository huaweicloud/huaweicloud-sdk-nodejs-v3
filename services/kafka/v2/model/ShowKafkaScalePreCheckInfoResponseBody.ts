

export class ShowKafkaScalePreCheckInfoResponseBody {
    public name?: string;
    public success?: boolean;
    public reason?: string;
    public risk?: string;
    public constructor() { 
    }
    public withName(name: string): ShowKafkaScalePreCheckInfoResponseBody {
        this['name'] = name;
        return this;
    }
    public withSuccess(success: boolean): ShowKafkaScalePreCheckInfoResponseBody {
        this['success'] = success;
        return this;
    }
    public withReason(reason: string): ShowKafkaScalePreCheckInfoResponseBody {
        this['reason'] = reason;
        return this;
    }
    public withRisk(risk: string): ShowKafkaScalePreCheckInfoResponseBody {
        this['risk'] = risk;
        return this;
    }
}