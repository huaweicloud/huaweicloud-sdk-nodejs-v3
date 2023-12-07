

export class ShowApplyDetailRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowApplyDetailRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'apply_id'?: string;
    public constructor(workspace?: string, contentType?: string, applyId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['apply_id'] = applyId;
    }
    public withWorkspace(workspace: string): ShowApplyDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowApplyDetailRequestDlmTypeEnum | string): ShowApplyDetailRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowApplyDetailRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowApplyDetailRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowApplyDetailRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApplyId(applyId: string): ShowApplyDetailRequest {
        this['apply_id'] = applyId;
        return this;
    }
    public set applyId(applyId: string  | undefined) {
        this['apply_id'] = applyId;
    }
    public get applyId(): string | undefined {
        return this['apply_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApplyDetailRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
