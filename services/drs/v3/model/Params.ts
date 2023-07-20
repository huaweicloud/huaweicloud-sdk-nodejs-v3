

export class Params {
    private 'compare_result'?: ParamsCompareResultEnum | string;
    private 'data_type'?: string;
    public group?: ParamsGroupEnum | string;
    public key?: string;
    private 'need_restart'?: ParamsNeedRestartEnum | string;
    private 'source_value'?: string;
    private 'target_value'?: string;
    private 'value_range'?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withCompareResult(compareResult: ParamsCompareResultEnum | string): Params {
        this['compare_result'] = compareResult;
        return this;
    }
    public set compareResult(compareResult: ParamsCompareResultEnum | string  | undefined) {
        this['compare_result'] = compareResult;
    }
    public get compareResult(): ParamsCompareResultEnum | string | undefined {
        return this['compare_result'];
    }
    public withDataType(dataType: string): Params {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withGroup(group: ParamsGroupEnum | string): Params {
        this['group'] = group;
        return this;
    }
    public withKey(key: string): Params {
        this['key'] = key;
        return this;
    }
    public withNeedRestart(needRestart: ParamsNeedRestartEnum | string): Params {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: ParamsNeedRestartEnum | string  | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart(): ParamsNeedRestartEnum | string | undefined {
        return this['need_restart'];
    }
    public withSourceValue(sourceValue: string): Params {
        this['source_value'] = sourceValue;
        return this;
    }
    public set sourceValue(sourceValue: string  | undefined) {
        this['source_value'] = sourceValue;
    }
    public get sourceValue(): string | undefined {
        return this['source_value'];
    }
    public withTargetValue(targetValue: string): Params {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
    public withValueRange(valueRange: string): Params {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withErrorCode(errorCode: string): Params {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): Params {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
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
