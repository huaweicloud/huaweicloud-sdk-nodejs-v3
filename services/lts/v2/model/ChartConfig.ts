

export class ChartConfig {
    private 'can_sort': boolean | undefined;
    private 'can_search': boolean | undefined;
    private 'page_size': number | undefined;
    public constructor(canSort?: any, canSearch?: any, pageSize?: any) { 
        this['can_sort'] = canSort;
        this['can_search'] = canSearch;
        this['page_size'] = pageSize;
    }
    public withCanSort(canSort: boolean): ChartConfig {
        this['can_sort'] = canSort;
        return this;
    }
    public set canSort(canSort: boolean | undefined) {
        this['can_sort'] = canSort;
    }
    public get canSort() {
        return this['can_sort'];
    }
    public withCanSearch(canSearch: boolean): ChartConfig {
        this['can_search'] = canSearch;
        return this;
    }
    public set canSearch(canSearch: boolean | undefined) {
        this['can_search'] = canSearch;
    }
    public get canSearch() {
        return this['can_search'];
    }
    public withPageSize(pageSize: number): ChartConfig {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize() {
        return this['page_size'];
    }
}