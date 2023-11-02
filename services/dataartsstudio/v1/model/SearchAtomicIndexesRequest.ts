

export class SearchAtomicIndexesRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public status?: SearchAtomicIndexesRequestStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'l3_id'?: number;
    private 'table_id'?: number;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): SearchAtomicIndexesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): SearchAtomicIndexesRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): SearchAtomicIndexesRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): SearchAtomicIndexesRequest {
        this['approver'] = approver;
        return this;
    }
    public withStatus(status: SearchAtomicIndexesRequestStatusEnum | string): SearchAtomicIndexesRequest {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): SearchAtomicIndexesRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SearchAtomicIndexesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withL3Id(l3Id: number): SearchAtomicIndexesRequest {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: number  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): number | undefined {
        return this['l3_id'];
    }
    public withTableId(tableId: number): SearchAtomicIndexesRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: number  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): number | undefined {
        return this['table_id'];
    }
    public withLimit(limit: number): SearchAtomicIndexesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchAtomicIndexesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchAtomicIndexesRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
