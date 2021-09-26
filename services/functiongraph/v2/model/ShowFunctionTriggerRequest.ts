

export class ShowFunctionTriggerRequest {
    private 'function_urn': string | undefined;
    private 'trigger_type_code': ShowFunctionTriggerRequestTriggerTypeCodeEnum | undefined;
    private 'trigger_id': string | undefined;
    public constructor(functionUrn?: any, triggerTypeCode?: any, triggerId?: any) { 
        this['function_urn'] = functionUrn;
        this['trigger_type_code'] = triggerTypeCode;
        this['trigger_id'] = triggerId;
    }
    public withFunctionUrn(functionUrn: string): ShowFunctionTriggerRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withTriggerTypeCode(triggerTypeCode: ShowFunctionTriggerRequestTriggerTypeCodeEnum): ShowFunctionTriggerRequest {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: ShowFunctionTriggerRequestTriggerTypeCodeEnum | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode() {
        return this['trigger_type_code'];
    }
    public withTriggerId(triggerId: string): ShowFunctionTriggerRequest {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId() {
        return this['trigger_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFunctionTriggerRequestTriggerTypeCodeEnum {
    TIMER = 'TIMER',
    APIG = 'APIG',
    CTS = 'CTS',
    DDS = 'DDS',
    DMS = 'DMS',
    DIS = 'DIS',
    LTS = 'LTS',
    OBS = 'OBS',
    SMN = 'SMN',
    KAFKA = 'KAFKA'
}
