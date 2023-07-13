

export class GetQuerySearchCriteriasBody {
    public criteria?: string;
    public name?: string;
    public id?: string;
    private 'search_type'?: string | undefined;
    public constructor() { 
    }
    public withCriteria(criteria: string): GetQuerySearchCriteriasBody {
        this['criteria'] = criteria;
        return this;
    }
    public withName(name: string): GetQuerySearchCriteriasBody {
        this['name'] = name;
        return this;
    }
    public withId(id: string): GetQuerySearchCriteriasBody {
        this['id'] = id;
        return this;
    }
    public withSearchType(searchType: string): GetQuerySearchCriteriasBody {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: string | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType() {
        return this['search_type'];
    }
}