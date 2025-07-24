

export class SearchRequest {
    private 'search_type'?: string;
    private 'search_value'?: string;
    public constructor() { 
    }
    public withSearchType(searchType: string): SearchRequest {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): string | undefined {
        return this['search_type'];
    }
    public withSearchValue(searchValue: string): SearchRequest {
        this['search_value'] = searchValue;
        return this;
    }
    public set searchValue(searchValue: string  | undefined) {
        this['search_value'] = searchValue;
    }
    public get searchValue(): string | undefined {
        return this['search_value'];
    }
}