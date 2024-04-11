

export class ListCompoundMetricsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public status?: ListCompoundMetricsRequestStatusEnum | string;
    private 'dimension_group'?: string;
    private 'atomic_index_id'?: number;
    private 'l3_id'?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListCompoundMetricsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListCompoundMetricsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListCompoundMetricsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListCompoundMetricsRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListCompoundMetricsRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): ListCompoundMetricsRequest {
        this['approver'] = approver;
        return this;
    }
    public withStatus(status: ListCompoundMetricsRequestStatusEnum | string): ListCompoundMetricsRequest {
        this['status'] = status;
        return this;
    }
    public withDimensionGroup(dimensionGroup: string): ListCompoundMetricsRequest {
        this['dimension_group'] = dimensionGroup;
        return this;
    }
    public set dimensionGroup(dimensionGroup: string  | undefined) {
        this['dimension_group'] = dimensionGroup;
    }
    public get dimensionGroup(): string | undefined {
        return this['dimension_group'];
    }
    public withAtomicIndexId(atomicIndexId: number): ListCompoundMetricsRequest {
        this['atomic_index_id'] = atomicIndexId;
        return this;
    }
    public set atomicIndexId(atomicIndexId: number  | undefined) {
        this['atomic_index_id'] = atomicIndexId;
    }
    public get atomicIndexId(): number | undefined {
        return this['atomic_index_id'];
    }
    public withL3Id(l3Id: number): ListCompoundMetricsRequest {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: number  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): number | undefined {
        return this['l3_id'];
    }
    public withBeginTime(beginTime: string): ListCompoundMetricsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListCompoundMetricsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListCompoundMetricsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCompoundMetricsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCompoundMetricsRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
