

export class ListDerivativeIndexesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public status?: ListDerivativeIndexesRequestStatusEnum | string;
    private 'dimension_id'?: string;
    private 'dimension_group'?: string;
    private 'atomic_index_id'?: string;
    private 'all_metrics'?: boolean;
    private 'dw_type'?: string;
    private 'l3_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListDerivativeIndexesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListDerivativeIndexesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListDerivativeIndexesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListDerivativeIndexesRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListDerivativeIndexesRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): ListDerivativeIndexesRequest {
        this['approver'] = approver;
        return this;
    }
    public withStatus(status: ListDerivativeIndexesRequestStatusEnum | string): ListDerivativeIndexesRequest {
        this['status'] = status;
        return this;
    }
    public withDimensionId(dimensionId: string): ListDerivativeIndexesRequest {
        this['dimension_id'] = dimensionId;
        return this;
    }
    public set dimensionId(dimensionId: string  | undefined) {
        this['dimension_id'] = dimensionId;
    }
    public get dimensionId(): string | undefined {
        return this['dimension_id'];
    }
    public withDimensionGroup(dimensionGroup: string): ListDerivativeIndexesRequest {
        this['dimension_group'] = dimensionGroup;
        return this;
    }
    public set dimensionGroup(dimensionGroup: string  | undefined) {
        this['dimension_group'] = dimensionGroup;
    }
    public get dimensionGroup(): string | undefined {
        return this['dimension_group'];
    }
    public withAtomicIndexId(atomicIndexId: string): ListDerivativeIndexesRequest {
        this['atomic_index_id'] = atomicIndexId;
        return this;
    }
    public set atomicIndexId(atomicIndexId: string  | undefined) {
        this['atomic_index_id'] = atomicIndexId;
    }
    public get atomicIndexId(): string | undefined {
        return this['atomic_index_id'];
    }
    public withAllMetrics(allMetrics: boolean): ListDerivativeIndexesRequest {
        this['all_metrics'] = allMetrics;
        return this;
    }
    public set allMetrics(allMetrics: boolean  | undefined) {
        this['all_metrics'] = allMetrics;
    }
    public get allMetrics(): boolean | undefined {
        return this['all_metrics'];
    }
    public withDwType(dwType: string): ListDerivativeIndexesRequest {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withL3Id(l3Id: string): ListDerivativeIndexesRequest {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withBeginTime(beginTime: string): ListDerivativeIndexesRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListDerivativeIndexesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListDerivativeIndexesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDerivativeIndexesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDerivativeIndexesRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
