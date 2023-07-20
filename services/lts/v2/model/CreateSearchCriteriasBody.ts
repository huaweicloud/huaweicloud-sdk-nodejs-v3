

export class CreateSearchCriteriasBody {
    public criteria?: string;
    private 'eps_id'?: string;
    public name?: string;
    private 'search_type'?: string;
    public constructor(criteria?: string, name?: string, searchType?: string) { 
        this['criteria'] = criteria;
        this['name'] = name;
        this['search_type'] = searchType;
    }
    public withCriteria(criteria: string): CreateSearchCriteriasBody {
        this['criteria'] = criteria;
        return this;
    }
    public withEpsId(epsId: string): CreateSearchCriteriasBody {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withName(name: string): CreateSearchCriteriasBody {
        this['name'] = name;
        return this;
    }
    public withSearchType(searchType: string): CreateSearchCriteriasBody {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): string | undefined {
        return this['search_type'];
    }
}