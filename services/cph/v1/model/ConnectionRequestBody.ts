

export class ConnectionRequestBody {
    private 'phone_ids'?: Array<string>;
    private 'client_type'?: ConnectionRequestBodyClientTypeEnum | string;
    public constructor(phoneIds?: Array<string>, clientType?: string) { 
        this['phone_ids'] = phoneIds;
        this['client_type'] = clientType;
    }
    public withPhoneIds(phoneIds: Array<string>): ConnectionRequestBody {
        this['phone_ids'] = phoneIds;
        return this;
    }
    public set phoneIds(phoneIds: Array<string>  | undefined) {
        this['phone_ids'] = phoneIds;
    }
    public get phoneIds(): Array<string> | undefined {
        return this['phone_ids'];
    }
    public withClientType(clientType: ConnectionRequestBodyClientTypeEnum | string): ConnectionRequestBody {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: ConnectionRequestBodyClientTypeEnum | string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): ConnectionRequestBodyClientTypeEnum | string | undefined {
        return this['client_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConnectionRequestBodyClientTypeEnum {
    ANDROID = 'ANDROID',
    WINDOWS = 'WINDOWS',
    H5_MOBILE = 'H5_MOBILE',
    H5_PC = 'H5_PC',
    IOS = 'IOS'
}
