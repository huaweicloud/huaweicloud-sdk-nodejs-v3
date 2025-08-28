

export class ShowDetailsOfGatewayResponseTypeV2Request {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    private 'response_id'?: string;
    private 'response_type'?: ShowDetailsOfGatewayResponseTypeV2RequestResponseTypeEnum | string;
    public constructor(instanceId?: string, groupId?: string, responseId?: string, responseType?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
        this['response_id'] = responseId;
        this['response_type'] = responseType;
    }
    public withInstanceId(instanceId: string): ShowDetailsOfGatewayResponseTypeV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): ShowDetailsOfGatewayResponseTypeV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withResponseId(responseId: string): ShowDetailsOfGatewayResponseTypeV2Request {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withResponseType(responseType: ShowDetailsOfGatewayResponseTypeV2RequestResponseTypeEnum | string): ShowDetailsOfGatewayResponseTypeV2Request {
        this['response_type'] = responseType;
        return this;
    }
    public set responseType(responseType: ShowDetailsOfGatewayResponseTypeV2RequestResponseTypeEnum | string  | undefined) {
        this['response_type'] = responseType;
    }
    public get responseType(): ShowDetailsOfGatewayResponseTypeV2RequestResponseTypeEnum | string | undefined {
        return this['response_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfGatewayResponseTypeV2RequestResponseTypeEnum {
    AUTH_FAILURE = 'AUTH_FAILURE',
    AUTH_HEADER_MISSING = 'AUTH_HEADER_MISSING',
    AUTHORIZER_FAILURE = 'AUTHORIZER_FAILURE',
    AUTHORIZER_CONF_FAILURE = 'AUTHORIZER_CONF_FAILURE',
    AUTHORIZER_IDENTITIES_FAILURE = 'AUTHORIZER_IDENTITIES_FAILURE',
    BACKEND_UNAVAILABLE = 'BACKEND_UNAVAILABLE',
    BACKEND_TIMEOUT = 'BACKEND_TIMEOUT',
    THROTTLED = 'THROTTLED',
    UNAUTHORIZED = 'UNAUTHORIZED',
    ACCESS_DENIED = 'ACCESS_DENIED',
    NOT_FOUND = 'NOT_FOUND',
    REQUEST_PARAMETERS_FAILURE = 'REQUEST_PARAMETERS_FAILURE',
    DEFAULT_4XX = 'DEFAULT_4XX',
    DEFAULT_5XX = 'DEFAULT_5XX',
    THIRD_AUTH_FAILURE = 'THIRD_AUTH_FAILURE',
    THIRD_AUTH_IDENTITIES_FAILURE = 'THIRD_AUTH_IDENTITIES_FAILURE',
    THIRD_AUTH_CONF_FAILURE = 'THIRD_AUTH_CONF_FAILURE',
    OIDC_AUTH_TOKEN_VERIFY_FAIL = 'OIDC_AUTH_TOKEN_VERIFY_FAIL',
    OIDC_AUTH_GET_DISCOVERY_ERROR = 'OIDC_AUTH_GET_DISCOVERY_ERROR',
    OIDC_AUTH_CODE_FLOW_FAIL = 'OIDC_AUTH_CODE_FLOW_FAIL',
    JWT_AUTH_FAILURE = 'JWT_AUTH_FAILURE',
    ORCHESTRATION_PARAMETER_NOT_FOUND = 'ORCHESTRATION_PARAMETER_NOT_FOUND',
    ORCHESTRATION_FAILURE = 'ORCHESTRATION_FAILURE'
}
