import { EventQueryParamSort } from './EventQueryParamSort';
import { RelationModel } from './RelationModel';


export class EventQueryParam {
    private 'time_range'?: string;
    public step?: number;
    public search?: string;
    public sort?: EventQueryParamSort;
    private 'metadata_relation'?: Array<RelationModel>;
    public constructor(timeRange?: string) { 
        this['time_range'] = timeRange;
    }
    public withTimeRange(timeRange: string): EventQueryParam {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: string  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): string | undefined {
        return this['time_range'];
    }
    public withStep(step: number): EventQueryParam {
        this['step'] = step;
        return this;
    }
    public withSearch(search: string): EventQueryParam {
        this['search'] = search;
        return this;
    }
    public withSort(sort: EventQueryParamSort): EventQueryParam {
        this['sort'] = sort;
        return this;
    }
    public withMetadataRelation(metadataRelation: Array<RelationModel>): EventQueryParam {
        this['metadata_relation'] = metadataRelation;
        return this;
    }
    public set metadataRelation(metadataRelation: Array<RelationModel>  | undefined) {
        this['metadata_relation'] = metadataRelation;
    }
    public get metadataRelation(): Array<RelationModel> | undefined {
        return this['metadata_relation'];
    }
}