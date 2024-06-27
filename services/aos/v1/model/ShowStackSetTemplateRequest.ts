

export class ShowStackSetTemplateRequest {
    private 'Client-Request-Id'?: string;
    private 'stack_set_name'?: string;
    private 'stack_set_id'?: string;
    private 'access_control_source_ips'?: Array<string>;
    private 'access_control_source_vpc_ids'?: Array<string>;
    private 'call_identity'?: ShowStackSetTemplateRequestCallIdentityEnum | string;
    public constructor(clientRequestId?: string, stackSetName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['stack_set_name'] = stackSetName;
    }
    public withClientRequestId(clientRequestId: string): ShowStackSetTemplateRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withStackSetName(stackSetName: string): ShowStackSetTemplateRequest {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStackSetId(stackSetId: string): ShowStackSetTemplateRequest {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withAccessControlSourceIps(accessControlSourceIps: Array<string>): ShowStackSetTemplateRequest {
        this['access_control_source_ips'] = accessControlSourceIps;
        return this;
    }
    public set accessControlSourceIps(accessControlSourceIps: Array<string>  | undefined) {
        this['access_control_source_ips'] = accessControlSourceIps;
    }
    public get accessControlSourceIps(): Array<string> | undefined {
        return this['access_control_source_ips'];
    }
    public withAccessControlSourceVpcIds(accessControlSourceVpcIds: Array<string>): ShowStackSetTemplateRequest {
        this['access_control_source_vpc_ids'] = accessControlSourceVpcIds;
        return this;
    }
    public set accessControlSourceVpcIds(accessControlSourceVpcIds: Array<string>  | undefined) {
        this['access_control_source_vpc_ids'] = accessControlSourceVpcIds;
    }
    public get accessControlSourceVpcIds(): Array<string> | undefined {
        return this['access_control_source_vpc_ids'];
    }
    public withCallIdentity(callIdentity: ShowStackSetTemplateRequestCallIdentityEnum | string): ShowStackSetTemplateRequest {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: ShowStackSetTemplateRequestCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): ShowStackSetTemplateRequestCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowStackSetTemplateRequestCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
