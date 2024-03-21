

export class DeleteFunctionTriggerRequest {
    private 'function_urn'?: string;
    private 'trigger_type_code'?: DeleteFunctionTriggerRequestTriggerTypeCodeEnum | string;
    private 'trigger_id'?: string;
    private 'Content-Type'?: string;
    public constructor(functionUrn?: string, triggerTypeCode?: string, triggerId?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['trigger_type_code'] = triggerTypeCode;
        this['trigger_id'] = triggerId;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): DeleteFunctionTriggerRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withTriggerTypeCode(triggerTypeCode: DeleteFunctionTriggerRequestTriggerTypeCodeEnum | string): DeleteFunctionTriggerRequest {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: DeleteFunctionTriggerRequestTriggerTypeCodeEnum | string  | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode(): DeleteFunctionTriggerRequestTriggerTypeCodeEnum | string | undefined {
        return this['trigger_type_code'];
    }
    public withTriggerId(triggerId: string): DeleteFunctionTriggerRequest {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string  | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId(): string | undefined {
        return this['trigger_id'];
    }
    public withContentType(contentType: string): DeleteFunctionTriggerRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteFunctionTriggerRequestTriggerTypeCodeEnum {
    TIMER = 'TIMER',
    APIG = 'APIG',
    CTS = 'CTS',
    DDS = 'DDS',
    DMS = 'DMS',
    DIS = 'DIS',
    LTS = 'LTS',
    OBS = 'OBS',
    SMN = 'SMN',
    KAFKA = 'KAFKA',
    RABBITMQ = 'RABBITMQ',
    DEDICATEDGATEWAY = 'DEDICATEDGATEWAY',
    OPENSOURCEKAFKA = 'OPENSOURCEKAFKA',
    APIC = 'APIC',
    GAUSSMONGO = 'GAUSSMONGO',
    EVENTGRID = 'EVENTGRID',
    IOTDA = 'IOTDA'
}
