

export class ShowStackSetMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'stack_set_name'?: string;
    private 'stack_set_id'?: string;
    private 'call_identity'?: ShowStackSetMetadataRequestCallIdentityEnum | string;
    public constructor(clientRequestId?: string, stackSetName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['stack_set_name'] = stackSetName;
    }
    public withClientRequestId(clientRequestId: string): ShowStackSetMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withStackSetName(stackSetName: string): ShowStackSetMetadataRequest {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStackSetId(stackSetId: string): ShowStackSetMetadataRequest {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withCallIdentity(callIdentity: ShowStackSetMetadataRequestCallIdentityEnum | string): ShowStackSetMetadataRequest {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: ShowStackSetMetadataRequestCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): ShowStackSetMetadataRequestCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowStackSetMetadataRequestCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
