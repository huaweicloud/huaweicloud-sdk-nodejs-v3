

export class ChartConfig {
    private 'can_sort'?: boolean;
    private 'can_search'?: boolean;
    private 'page_size'?: number;
    public constructor(canSort?: boolean, canSearch?: boolean, pageSize?: number) { 
        this['can_sort'] = canSort;
        this['can_search'] = canSearch;
        this['page_size'] = pageSize;
    }
    public withCanSort(canSort: boolean): ChartConfig {
        this['can_sort'] = canSort;
        return this;
    }
    public set canSort(canSort: boolean  | undefined) {
        this['can_sort'] = canSort;
    }
    public get canSort(): boolean | undefined {
        return this['can_sort'];
    }
    public withCanSearch(canSearch: boolean): ChartConfig {
        this['can_search'] = canSearch;
        return this;
    }
    public set canSearch(canSearch: boolean  | undefined) {
        this['can_search'] = canSearch;
    }
    public get canSearch(): boolean | undefined {
        return this['can_search'];
    }
    public withPageSize(pageSize: number): ChartConfig {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}