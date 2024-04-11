

export class SearchDesignLatestApprovalDiffRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'biz_id'?: string;
    private 'biz_type'?: SearchDesignLatestApprovalDiffRequestBizTypeEnum | string;
    public constructor(workspace?: string, bizId?: string, bizType?: string) { 
        this['workspace'] = workspace;
        this['biz_id'] = bizId;
        this['biz_type'] = bizType;
    }
    public withWorkspace(workspace: string): SearchDesignLatestApprovalDiffRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): SearchDesignLatestApprovalDiffRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): SearchDesignLatestApprovalDiffRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBizId(bizId: string): SearchDesignLatestApprovalDiffRequest {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withBizType(bizType: SearchDesignLatestApprovalDiffRequestBizTypeEnum | string): SearchDesignLatestApprovalDiffRequest {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: SearchDesignLatestApprovalDiffRequestBizTypeEnum | string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): SearchDesignLatestApprovalDiffRequestBizTypeEnum | string | undefined {
        return this['biz_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchDesignLatestApprovalDiffRequestBizTypeEnum {
    ATOMIC_INDEX = 'ATOMIC_INDEX',
    DERIVATIVE_INDEX = 'DERIVATIVE_INDEX',
    DIMENSION = 'DIMENSION',
    FACT_LOGIC_TABLE = 'FACT_LOGIC_TABLE',
    TABLE_MODEL = 'TABLE_MODEL',
    STANDARD_ELEMENT = 'STANDARD_ELEMENT',
    AGGREGATION_LOGIC_TABLE = 'AGGREGATION_LOGIC_TABLE',
    CODE_TABLE = 'CODE_TABLE',
    BIZ_METRIC = 'BIZ_METRIC',
    COMPOUND_METRIC = 'COMPOUND_METRIC'
}
