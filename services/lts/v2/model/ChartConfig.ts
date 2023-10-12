

export class ChartConfig {
    public canSort?: boolean;
    public canSearch?: boolean;
    public pageSize?: number;
    public constructor(canSort?: boolean, canSearch?: boolean, pageSize?: number) { 
        this['canSort'] = canSort;
        this['canSearch'] = canSearch;
        this['pageSize'] = pageSize;
    }
    public withCanSort(canSort: boolean): ChartConfig {
        this['canSort'] = canSort;
        return this;
    }
    public withCanSearch(canSearch: boolean): ChartConfig {
        this['canSearch'] = canSearch;
        return this;
    }
    public withPageSize(pageSize: number): ChartConfig {
        this['pageSize'] = pageSize;
        return this;
    }
}