

export class RegisterClientReqBody {
    private 'client_name'?: string;
    private 'client_type'?: RegisterClientReqBodyClientTypeEnum | string;
    private 'token_endpoint_auth_method'?: RegisterClientReqBodyTokenEndpointAuthMethodEnum | string;
    public scopes?: Array<string>;
    private 'grant_types'?: Array<RegisterClientReqBodyGrantTypesEnum> | Array<string>;
    private 'response_types'?: Array<RegisterClientReqBodyResponseTypesEnum> | Array<string>;
    public constructor(clientName?: string, clientType?: string, tokenEndpointAuthMethod?: string, grantTypes?: Array<string>, responseTypes?: Array<string>) { 
        this['client_name'] = clientName;
        this['client_type'] = clientType;
        this['token_endpoint_auth_method'] = tokenEndpointAuthMethod;
        this['grant_types'] = grantTypes;
        this['response_types'] = responseTypes;
    }
    public withClientName(clientName: string): RegisterClientReqBody {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withClientType(clientType: RegisterClientReqBodyClientTypeEnum | string): RegisterClientReqBody {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: RegisterClientReqBodyClientTypeEnum | string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): RegisterClientReqBodyClientTypeEnum | string | undefined {
        return this['client_type'];
    }
    public withTokenEndpointAuthMethod(tokenEndpointAuthMethod: RegisterClientReqBodyTokenEndpointAuthMethodEnum | string): RegisterClientReqBody {
        this['token_endpoint_auth_method'] = tokenEndpointAuthMethod;
        return this;
    }
    public set tokenEndpointAuthMethod(tokenEndpointAuthMethod: RegisterClientReqBodyTokenEndpointAuthMethodEnum | string  | undefined) {
        this['token_endpoint_auth_method'] = tokenEndpointAuthMethod;
    }
    public get tokenEndpointAuthMethod(): RegisterClientReqBodyTokenEndpointAuthMethodEnum | string | undefined {
        return this['token_endpoint_auth_method'];
    }
    public withScopes(scopes: Array<string>): RegisterClientReqBody {
        this['scopes'] = scopes;
        return this;
    }
    public withGrantTypes(grantTypes: Array<RegisterClientReqBodyGrantTypesEnum> | Array<string>): RegisterClientReqBody {
        this['grant_types'] = grantTypes;
        return this;
    }
    public set grantTypes(grantTypes: Array<RegisterClientReqBodyGrantTypesEnum> | Array<string>  | undefined) {
        this['grant_types'] = grantTypes;
    }
    public get grantTypes(): Array<RegisterClientReqBodyGrantTypesEnum> | Array<string> | undefined {
        return this['grant_types'];
    }
    public withResponseTypes(responseTypes: Array<RegisterClientReqBodyResponseTypesEnum> | Array<string>): RegisterClientReqBody {
        this['response_types'] = responseTypes;
        return this;
    }
    public set responseTypes(responseTypes: Array<RegisterClientReqBodyResponseTypesEnum> | Array<string>  | undefined) {
        this['response_types'] = responseTypes;
    }
    public get responseTypes(): Array<RegisterClientReqBodyResponseTypesEnum> | Array<string> | undefined {
        return this['response_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RegisterClientReqBodyClientTypeEnum {
    PUBLIC = 'public'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterClientReqBodyTokenEndpointAuthMethodEnum {
    CLIENT_SECRET_POST = 'client_secret_post'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterClientReqBodyGrantTypesEnum {
    URNIETFPARAMSOAUTHGRANT_TYPEDEVICE_CODE = 'urn:ietf:params:oauth:grant-type:device_code',
    AUTHORIZATION_CODE = 'authorization_code'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterClientReqBodyResponseTypesEnum {
    CODE = 'code'
}
