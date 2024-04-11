

export class ListDimensionsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public status?: ListDimensionsRequestStatusEnum | string;
    private 'l2_id'?: number;
    private 'derivative_ids'?: Array<number>;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'fact_logic_id'?: number;
    private 'dimension_type'?: ListDimensionsRequestDimensionTypeEnum | string;
    public limit?: number;
    public offset?: number;
    private 'biz_catalog_id'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListDimensionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListDimensionsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListDimensionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListDimensionsRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListDimensionsRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): ListDimensionsRequest {
        this['approver'] = approver;
        return this;
    }
    public withStatus(status: ListDimensionsRequestStatusEnum | string): ListDimensionsRequest {
        this['status'] = status;
        return this;
    }
    public withL2Id(l2Id: number): ListDimensionsRequest {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: number  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): number | undefined {
        return this['l2_id'];
    }
    public withDerivativeIds(derivativeIds: Array<number>): ListDimensionsRequest {
        this['derivative_ids'] = derivativeIds;
        return this;
    }
    public set derivativeIds(derivativeIds: Array<number>  | undefined) {
        this['derivative_ids'] = derivativeIds;
    }
    public get derivativeIds(): Array<number> | undefined {
        return this['derivative_ids'];
    }
    public withBeginTime(beginTime: string): ListDimensionsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListDimensionsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withFactLogicId(factLogicId: number): ListDimensionsRequest {
        this['fact_logic_id'] = factLogicId;
        return this;
    }
    public set factLogicId(factLogicId: number  | undefined) {
        this['fact_logic_id'] = factLogicId;
    }
    public get factLogicId(): number | undefined {
        return this['fact_logic_id'];
    }
    public withDimensionType(dimensionType: ListDimensionsRequestDimensionTypeEnum | string): ListDimensionsRequest {
        this['dimension_type'] = dimensionType;
        return this;
    }
    public set dimensionType(dimensionType: ListDimensionsRequestDimensionTypeEnum | string  | undefined) {
        this['dimension_type'] = dimensionType;
    }
    public get dimensionType(): ListDimensionsRequestDimensionTypeEnum | string | undefined {
        return this['dimension_type'];
    }
    public withLimit(limit: number): ListDimensionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDimensionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBizCatalogId(bizCatalogId: string): ListDimensionsRequest {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: string  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): string | undefined {
        return this['biz_catalog_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDimensionsRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDimensionsRequestDimensionTypeEnum {
    COMMON = 'COMMON',
    LOOKUP = 'LOOKUP',
    HIERARCHIES = 'HIERARCHIES'
}
