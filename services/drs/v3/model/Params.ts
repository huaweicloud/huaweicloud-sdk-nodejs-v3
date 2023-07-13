

export class Params {
    private 'compare_result'?: ParamsCompareResultEnum | undefined;
    private 'data_type'?: string | undefined;
    public group?: ParamsGroupEnum;
    public key?: string;
    private 'need_restart'?: ParamsNeedRestartEnum | undefined;
    private 'source_value'?: string | undefined;
    private 'target_value'?: string | undefined;
    private 'value_range'?: string | undefined;
    private 'error_code'?: string | undefined;
    private 'error_message'?: string | undefined;
    public constructor() { 
    }
    public withCompareResult(compareResult: ParamsCompareResultEnum): Params {
        this['compare_result'] = compareResult;
        return this;
    }
    public set compareResult(compareResult: ParamsCompareResultEnum | undefined) {
        this['compare_result'] = compareResult;
    }
    public get compareResult() {
        return this['compare_result'];
    }
    public withDataType(dataType: string): Params {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType() {
        return this['data_type'];
    }
    public withGroup(group: ParamsGroupEnum): Params {
        this['group'] = group;
        return this;
    }
    public withKey(key: string): Params {
        this['key'] = key;
        return this;
    }
    public withNeedRestart(needRestart: ParamsNeedRestartEnum): Params {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: ParamsNeedRestartEnum | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart() {
        return this['need_restart'];
    }
    public withSourceValue(sourceValue: string): Params {
        this['source_value'] = sourceValue;
        return this;
    }
    public set sourceValue(sourceValue: string | undefined) {
        this['source_value'] = sourceValue;
    }
    public get sourceValue() {
        return this['source_value'];
    }
    public withTargetValue(targetValue: string): Params {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue() {
        return this['target_value'];
    }
    public withValueRange(valueRange: string): Params {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange() {
        return this['value_range'];
    }
    public withErrorCode(errorCode: string): Params {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): Params {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ParamsCompareResultEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum ParamsGroupEnum {
    COMMON = 'common',
    PERFORMANCE = 'performance'
}
/**
    * @export
    * @enum {string}
    */
export enum ParamsNeedRestartEnum {
    TRUE = 'true',
    FALSE = 'false'
}
