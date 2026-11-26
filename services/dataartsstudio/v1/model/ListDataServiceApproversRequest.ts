

export class ListDataServiceApproversRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListDataServiceApproversRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public page?: number;
    public size?: number;
    private 'approver_name'?: string;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ListDataServiceApproversRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListDataServiceApproversRequestDlmTypeEnum | string): ListDataServiceApproversRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListDataServiceApproversRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListDataServiceApproversRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListDataServiceApproversRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPage(page: number): ListDataServiceApproversRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListDataServiceApproversRequest {
        this['size'] = size;
        return this;
    }
    public withApproverName(approverName: string): ListDataServiceApproversRequest {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDataServiceApproversRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
