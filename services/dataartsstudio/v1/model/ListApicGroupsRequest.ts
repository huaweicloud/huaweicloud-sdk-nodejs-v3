

export class ListApicGroupsRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApicGroupsRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'apig_instance_id'?: string;
    private 'apig_type'?: ListApicGroupsRequestApigTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, contentType?: string, apigInstanceId?: string, apigType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['apig_instance_id'] = apigInstanceId;
        this['apig_type'] = apigType;
    }
    public withWorkspace(workspace: string): ListApicGroupsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApicGroupsRequestDlmTypeEnum | string): ListApicGroupsRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApicGroupsRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApicGroupsRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApicGroupsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApigInstanceId(apigInstanceId: string): ListApicGroupsRequest {
        this['apig_instance_id'] = apigInstanceId;
        return this;
    }
    public set apigInstanceId(apigInstanceId: string  | undefined) {
        this['apig_instance_id'] = apigInstanceId;
    }
    public get apigInstanceId(): string | undefined {
        return this['apig_instance_id'];
    }
    public withApigType(apigType: ListApicGroupsRequestApigTypeEnum | string): ListApicGroupsRequest {
        this['apig_type'] = apigType;
        return this;
    }
    public set apigType(apigType: ListApicGroupsRequestApigTypeEnum | string  | undefined) {
        this['apig_type'] = apigType;
    }
    public get apigType(): ListApicGroupsRequestApigTypeEnum | string | undefined {
        return this['apig_type'];
    }
    public withLimit(limit: number): ListApicGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListApicGroupsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApicGroupsRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApicGroupsRequestApigTypeEnum {
    APIGW = 'APIGW',
    ROMA_APIC = 'ROMA_APIC'
}
