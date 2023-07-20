

export class TopnRequstBody {
    private 'end_time'?: number;
    private 'is_desc'?: boolean;
    private 'resource_type'?: string;
    private 'sort_by'?: string;
    private 'start_time'?: number;
    public topn?: number;
    public filter?: { [key: string]: string; };
    private 'search_list'?: Array<string>;
    public constructor(endTime?: number, isDesc?: boolean, resourceType?: string, sortBy?: string, startTime?: number, topn?: number, filter?: { [key: string]: string; }, searchList?: Array<string>) { 
        this['end_time'] = endTime;
        this['is_desc'] = isDesc;
        this['resource_type'] = resourceType;
        this['sort_by'] = sortBy;
        this['start_time'] = startTime;
        this['topn'] = topn;
        this['filter'] = filter;
        this['search_list'] = searchList;
    }
    public withEndTime(endTime: number): TopnRequstBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withIsDesc(isDesc: boolean): TopnRequstBody {
        this['is_desc'] = isDesc;
        return this;
    }
    public set isDesc(isDesc: boolean  | undefined) {
        this['is_desc'] = isDesc;
    }
    public get isDesc(): boolean | undefined {
        return this['is_desc'];
    }
    public withResourceType(resourceType: string): TopnRequstBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withSortBy(sortBy: string): TopnRequstBody {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withStartTime(startTime: number): TopnRequstBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTopn(topn: number): TopnRequstBody {
        this['topn'] = topn;
        return this;
    }
    public withFilter(filter: { [key: string]: string; }): TopnRequstBody {
        this['filter'] = filter;
        return this;
    }
    public withSearchList(searchList: Array<string>): TopnRequstBody {
        this['search_list'] = searchList;
        return this;
    }
    public set searchList(searchList: Array<string>  | undefined) {
        this['search_list'] = searchList;
    }
    public get searchList(): Array<string> | undefined {
        return this['search_list'];
    }
}