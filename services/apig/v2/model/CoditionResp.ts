import { ApiConditionBase } from './ApiConditionBase';


export class CoditionResp {
    private 'req_param_name'?: string;
    private 'condition_type'?: CoditionRespConditionTypeEnum | string;
    private 'condition_origin'?: CoditionRespConditionOriginEnum | string;
    private 'condition_value'?: string;
    public id?: string;
    private 'req_param_id'?: string;
    private 'req_param_location'?: string;
    public constructor(conditionOrigin?: string, conditionValue?: string) { 
        this['condition_origin'] = conditionOrigin;
        this['condition_value'] = conditionValue;
    }
    public withReqParamName(reqParamName: string): CoditionResp {
        this['req_param_name'] = reqParamName;
        return this;
    }
    public set reqParamName(reqParamName: string  | undefined) {
        this['req_param_name'] = reqParamName;
    }
    public get reqParamName(): string | undefined {
        return this['req_param_name'];
    }
    public withConditionType(conditionType: CoditionRespConditionTypeEnum | string): CoditionResp {
        this['condition_type'] = conditionType;
        return this;
    }
    public set conditionType(conditionType: CoditionRespConditionTypeEnum | string  | undefined) {
        this['condition_type'] = conditionType;
    }
    public get conditionType(): CoditionRespConditionTypeEnum | string | undefined {
        return this['condition_type'];
    }
    public withConditionOrigin(conditionOrigin: CoditionRespConditionOriginEnum | string): CoditionResp {
        this['condition_origin'] = conditionOrigin;
        return this;
    }
    public set conditionOrigin(conditionOrigin: CoditionRespConditionOriginEnum | string  | undefined) {
        this['condition_origin'] = conditionOrigin;
    }
    public get conditionOrigin(): CoditionRespConditionOriginEnum | string | undefined {
        return this['condition_origin'];
    }
    public withConditionValue(conditionValue: string): CoditionResp {
        this['condition_value'] = conditionValue;
        return this;
    }
    public set conditionValue(conditionValue: string  | undefined) {
        this['condition_value'] = conditionValue;
    }
    public get conditionValue(): string | undefined {
        return this['condition_value'];
    }
    public withId(id: string): CoditionResp {
        this['id'] = id;
        return this;
    }
    public withReqParamId(reqParamId: string): CoditionResp {
        this['req_param_id'] = reqParamId;
        return this;
    }
    public set reqParamId(reqParamId: string  | undefined) {
        this['req_param_id'] = reqParamId;
    }
    public get reqParamId(): string | undefined {
        return this['req_param_id'];
    }
    public withReqParamLocation(reqParamLocation: string): CoditionResp {
        this['req_param_location'] = reqParamLocation;
        return this;
    }
    public set reqParamLocation(reqParamLocation: string  | undefined) {
        this['req_param_location'] = reqParamLocation;
    }
    public get reqParamLocation(): string | undefined {
        return this['req_param_location'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CoditionRespConditionTypeEnum {
    EXACT = 'exact',
    ENUM = 'enum',
    PATTERN = 'pattern'
}
/**
    * @export
    * @enum {string}
    */
export enum CoditionRespConditionOriginEnum {
    PARAM = 'param',
    SOURCE = 'source'
}
