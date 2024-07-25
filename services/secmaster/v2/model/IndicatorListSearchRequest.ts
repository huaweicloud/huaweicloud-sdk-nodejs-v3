import { DataobjectSearchCondition } from './DataobjectSearchCondition';


export class IndicatorListSearchRequest {
    public ids?: Array<string>;
    private 'dataclass_id'?: string;
    public condition?: DataobjectSearchCondition;
    public offset?: number;
    public limit?: number;
    private 'sort_by'?: string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public constructor(condition?: DataobjectSearchCondition, offset?: number, limit?: number) { 
        this['condition'] = condition;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withIds(ids: Array<string>): IndicatorListSearchRequest {
        this['ids'] = ids;
        return this;
    }
    public withDataclassId(dataclassId: string): IndicatorListSearchRequest {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withCondition(condition: DataobjectSearchCondition): IndicatorListSearchRequest {
        this['condition'] = condition;
        return this;
    }
    public withOffset(offset: number): IndicatorListSearchRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): IndicatorListSearchRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortBy(sortBy: string): IndicatorListSearchRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withFromDate(fromDate: string): IndicatorListSearchRequest {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): IndicatorListSearchRequest {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
}