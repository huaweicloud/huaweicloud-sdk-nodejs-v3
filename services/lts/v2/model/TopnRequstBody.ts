

export class TopnRequstBody {
    private 'end_time': number | undefined;
    private 'is_desc': boolean | undefined;
    private 'resource_type': string | undefined;
    private 'sort_by': string | undefined;
    private 'start_time': number | undefined;
    public topn: number;
    public filter: { [key: string]: string; };
    private 'search_list': Array<string> | undefined;
    public constructor(endTime?: any, isDesc?: any, resourceType?: any, sortBy?: any, startTime?: any, topn?: any, filter?: any, searchList?: any) { 
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
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withIsDesc(isDesc: boolean): TopnRequstBody {
        this['is_desc'] = isDesc;
        return this;
    }
    public set isDesc(isDesc: boolean | undefined) {
        this['is_desc'] = isDesc;
    }
    public get isDesc() {
        return this['is_desc'];
    }
    public withResourceType(resourceType: string): TopnRequstBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withSortBy(sortBy: string): TopnRequstBody {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy() {
        return this['sort_by'];
    }
    public withStartTime(startTime: number): TopnRequstBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
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
    public set searchList(searchList: Array<string> | undefined) {
        this['search_list'] = searchList;
    }
    public get searchList() {
        return this['search_list'];
    }
}