import { UpdateTriggerRequestBody } from './UpdateTriggerRequestBody';


export class UpdateTriggerRequest {
    private 'function_urn'?: string;
    private 'trigger_type_code'?: UpdateTriggerRequestTriggerTypeCodeEnum | string;
    private 'trigger_id'?: string;
    private 'Content-Type'?: string;
    public body?: UpdateTriggerRequestBody;
    public constructor(functionUrn?: string, triggerTypeCode?: string, triggerId?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['trigger_type_code'] = triggerTypeCode;
        this['trigger_id'] = triggerId;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): UpdateTriggerRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withTriggerTypeCode(triggerTypeCode: UpdateTriggerRequestTriggerTypeCodeEnum | string): UpdateTriggerRequest {
        this['trigger_type_code'] = triggerTypeCode;
        return this;
    }
    public set triggerTypeCode(triggerTypeCode: UpdateTriggerRequestTriggerTypeCodeEnum | string  | undefined) {
        this['trigger_type_code'] = triggerTypeCode;
    }
    public get triggerTypeCode(): UpdateTriggerRequestTriggerTypeCodeEnum | string | undefined {
        return this['trigger_type_code'];
    }
    public withTriggerId(triggerId: string): UpdateTriggerRequest {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string  | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId(): string | undefined {
        return this['trigger_id'];
    }
    public withContentType(contentType: string): UpdateTriggerRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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
    EVENTGRID = 'EVENTGRID',
    IOTDA = 'IOTDA'
}
