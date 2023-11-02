

export class ListApicInstancesRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApicInstancesRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'apig_type'?: ListApicInstancesRequestApigTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, apigType?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['apig_type'] = apigType;
    }
    public withWorkspace(workspace: string): ListApicInstancesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApicInstancesRequestDlmTypeEnum | string): ListApicInstancesRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApicInstancesRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApicInstancesRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApicInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApigType(apigType: ListApicInstancesRequestApigTypeEnum | string): ListApicInstancesRequest {
        this['apig_type'] = apigType;
        return this;
    }
    public set apigType(apigType: ListApicInstancesRequestApigTypeEnum | string  | undefined) {
        this['apig_type'] = apigType;
    }
    public get apigType(): ListApicInstancesRequestApigTypeEnum | string | undefined {
        return this['apig_type'];
    }
    public withLimit(limit: number): ListApicInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListApicInstancesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApicInstancesRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApicInstancesRequestApigTypeEnum {
    APIGW = 'APIGW',
    ROMA_APIC = 'ROMA_APIC'
}
