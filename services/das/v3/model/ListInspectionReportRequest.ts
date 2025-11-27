

export class ListInspectionReportRequest {
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'datastore_type'?: string;
    private 'health_rank'?: string;
    private 'sort_field'?: string;
    public asc?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(startAt?: number, endAt?: number, datastoreType?: string) { 
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['datastore_type'] = datastoreType;
    }
    public withStartAt(startAt: number): ListInspectionReportRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListInspectionReportRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withDatastoreType(datastoreType: string): ListInspectionReportRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withHealthRank(healthRank: string): ListInspectionReportRequest {
        this['health_rank'] = healthRank;
        return this;
    }
    public set healthRank(healthRank: string  | undefined) {
        this['health_rank'] = healthRank;
    }
    public get healthRank(): string | undefined {
        return this['health_rank'];
    }
    public withSortField(sortField: string): ListInspectionReportRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withAsc(asc: boolean): ListInspectionReportRequest {
        this['asc'] = asc;
        return this;
    }
    public withOffset(offset: number): ListInspectionReportRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInspectionReportRequest {
        this['limit'] = limit;
        return this;
    }
}