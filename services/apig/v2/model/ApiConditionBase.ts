

export class ApiConditionBase {
    private 'req_param_name'?: string;
    private 'sys_param_name'?: ApiConditionBaseSysParamNameEnum | string;
    private 'cookie_param_name'?: string;
    private 'frontend_authorizer_param_name'?: string;
    private 'condition_type'?: ApiConditionBaseConditionTypeEnum | string;
    private 'condition_origin'?: ApiConditionBaseConditionOriginEnum | string;
    private 'condition_value'?: string;
    public constructor(conditionOrigin?: string, conditionValue?: string) { 
        this['condition_origin'] = conditionOrigin;
        this['condition_value'] = conditionValue;
    }
    public withReqParamName(reqParamName: string): ApiConditionBase {
        this['req_param_name'] = reqParamName;
        return this;
    }
    public set reqParamName(reqParamName: string  | undefined) {
        this['req_param_name'] = reqParamName;
    }
    public get reqParamName(): string | undefined {
        return this['req_param_name'];
    }
    public withSysParamName(sysParamName: ApiConditionBaseSysParamNameEnum | string): ApiConditionBase {
        this['sys_param_name'] = sysParamName;
        return this;
    }
    public set sysParamName(sysParamName: ApiConditionBaseSysParamNameEnum | string  | undefined) {
        this['sys_param_name'] = sysParamName;
    }
    public get sysParamName(): ApiConditionBaseSysParamNameEnum | string | undefined {
        return this['sys_param_name'];
    }
    public withCookieParamName(cookieParamName: string): ApiConditionBase {
        this['cookie_param_name'] = cookieParamName;
        return this;
    }
    public set cookieParamName(cookieParamName: string  | undefined) {
        this['cookie_param_name'] = cookieParamName;
    }
    public get cookieParamName(): string | undefined {
        return this['cookie_param_name'];
    }
    public withFrontendAuthorizerParamName(frontendAuthorizerParamName: string): ApiConditionBase {
        this['frontend_authorizer_param_name'] = frontendAuthorizerParamName;
        return this;
    }
    public set frontendAuthorizerParamName(frontendAuthorizerParamName: string  | undefined) {
        this['frontend_authorizer_param_name'] = frontendAuthorizerParamName;
    }
    public get frontendAuthorizerParamName(): string | undefined {
        return this['frontend_authorizer_param_name'];
    }
    public withConditionType(conditionType: ApiConditionBaseConditionTypeEnum | string): ApiConditionBase {
        this['condition_type'] = conditionType;
        return this;
    }
    public set conditionType(conditionType: ApiConditionBaseConditionTypeEnum | string  | undefined) {
        this['condition_type'] = conditionType;
    }
    public get conditionType(): ApiConditionBaseConditionTypeEnum | string | undefined {
        return this['condition_type'];
    }
    public withConditionOrigin(conditionOrigin: ApiConditionBaseConditionOriginEnum | string): ApiConditionBase {
        this['condition_origin'] = conditionOrigin;
        return this;
    }
    public set conditionOrigin(conditionOrigin: ApiConditionBaseConditionOriginEnum | string  | undefined) {
        this['condition_origin'] = conditionOrigin;
    }
    public get conditionOrigin(): ApiConditionBaseConditionOriginEnum | string | undefined {
        return this['condition_origin'];
    }
    public withConditionValue(conditionValue: string): ApiConditionBase {
        this['condition_value'] = conditionValue;
        return this;
    }
    public set conditionValue(conditionValue: string  | undefined) {
        this['condition_value'] = conditionValue;
    }
    public get conditionValue(): string | undefined {
        return this['condition_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiConditionBaseSysParamNameEnum {
    REQ_PATH = 'req_path',
    REQ_METHOD = 'req_method'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiConditionBaseConditionTypeEnum {
    EXACT = 'exact',
    ENUM = 'enum',
    PATTERN = 'pattern'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiConditionBaseConditionOriginEnum {
    PARAM = 'param',
    SOURCE = 'source',
    SYSTEM = 'system',
    COOKIE = 'cookie',
    FRONTEND_AUTHORIZER = 'frontend_authorizer'
}
