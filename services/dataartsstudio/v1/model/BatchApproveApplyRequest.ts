import { OpenApplyIdsForApproveApply } from './OpenApplyIdsForApproveApply';


export class BatchApproveApplyRequest {
    public workspace?: string;
    private 'Dlm-Type'?: BatchApproveApplyRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: OpenApplyIdsForApproveApply;
    public constructor(workspace?: string, dlmType?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): BatchApproveApplyRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: BatchApproveApplyRequestDlmTypeEnum | string): BatchApproveApplyRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: BatchApproveApplyRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): BatchApproveApplyRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): BatchApproveApplyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: OpenApplyIdsForApproveApply): BatchApproveApplyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchApproveApplyRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
