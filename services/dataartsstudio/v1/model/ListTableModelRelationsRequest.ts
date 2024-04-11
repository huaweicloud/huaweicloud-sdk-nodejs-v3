

export class ListTableModelRelationsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'model_id'?: string;
    private 'table_ids'?: string;
    private 'biz_type'?: ListTableModelRelationsRequestBizTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, modelId?: string) { 
        this['workspace'] = workspace;
        this['model_id'] = modelId;
    }
    public withWorkspace(workspace: string): ListTableModelRelationsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListTableModelRelationsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListTableModelRelationsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withModelId(modelId: string): ListTableModelRelationsRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withTableIds(tableIds: string): ListTableModelRelationsRequest {
        this['table_ids'] = tableIds;
        return this;
    }
    public set tableIds(tableIds: string  | undefined) {
        this['table_ids'] = tableIds;
    }
    public get tableIds(): string | undefined {
        return this['table_ids'];
    }
    public withBizType(bizType: ListTableModelRelationsRequestBizTypeEnum | string): ListTableModelRelationsRequest {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: ListTableModelRelationsRequestBizTypeEnum | string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): ListTableModelRelationsRequestBizTypeEnum | string | undefined {
        return this['biz_type'];
    }
    public withLimit(limit: number): ListTableModelRelationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTableModelRelationsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTableModelRelationsRequestBizTypeEnum {
    TABLE_MODEL = 'TABLE_MODEL',
    FACT_LOGIC_TABLE = 'FACT_LOGIC_TABLE'
}
