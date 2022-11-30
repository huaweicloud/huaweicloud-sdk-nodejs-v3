import { UpdateTriggerRequestBody } from './UpdateTriggerRequestBody';


export class UpdateTriggerRequest {
    private 'function_urn': string | undefined;
    private 'trigger_type_code': UpdateTriggerRequestTriggerTypeCodeEnum | undefined;
    private 'trigger_id': string | undefined;
    public body?: UpdateTriggerRequestBody;
    public constructor(functionUrn?: any, triggerTypeCode?: any, triggerId?: any) { 
        this['function_urn'] = functionUrn;
        this['trigger_type_code'] = triggerTypeCode;
        this['trigger_id'] = triggerId;
    }
    public withFunctionUrn(functionUrn: string): UpdateTriggerRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withTriggerTypeCode(triggerTypeCode: UpdateTriggerRequestTriggerTypeCodeEnum): UpdateTriggerRequest {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: UpdateTriggerRequestTriggerTypeCodeEnum | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode() {
        return this['trigger_type_code'];
    }
    public withTriggerId(triggerId: string): UpdateTriggerRequest {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId() {
        return this['trigger_id'];
    }
    public withBody(body: UpdateTriggerRequestBody): UpdateTriggerRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTriggerRequestTriggerTypeCodeEnum {
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
    EVENTGRID = 'EVENTGRID'
}
