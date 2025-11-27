

export class ShowStackInstanceRequest {
    private 'Client-Request-Id'?: string;
    private 'stack_set_name'?: string;
    private 'stack_instance_addr'?: string;
    private 'stack_set_id'?: string;
    private 'call_identity'?: ShowStackInstanceRequestCallIdentityEnum | string;
    public constructor(clientRequestId?: string, stackSetName?: string, stackInstanceAddr?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['stack_set_name'] = stackSetName;
        this['stack_instance_addr'] = stackInstanceAddr;
    }
    public withClientRequestId(clientRequestId: string): ShowStackInstanceRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withStackSetName(stackSetName: string): ShowStackInstanceRequest {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStackInstanceAddr(stackInstanceAddr: string): ShowStackInstanceRequest {
        this['stack_instance_addr'] = stackInstanceAddr;
        return this;
    }
    public set stackInstanceAddr(stackInstanceAddr: string  | undefined) {
        this['stack_instance_addr'] = stackInstanceAddr;
    }
    public get stackInstanceAddr(): string | undefined {
        return this['stack_instance_addr'];
    }
    public withStackSetId(stackSetId: string): ShowStackInstanceRequest {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withCallIdentity(callIdentity: ShowStackInstanceRequestCallIdentityEnum | string): ShowStackInstanceRequest {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: ShowStackInstanceRequestCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): ShowStackInstanceRequestCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowStackInstanceRequestCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
