

export class CreateSearchCriteriasBody {
    public criteria: string;
    private 'eps_id'?: string | undefined;
    public name: string;
    private 'search_type': string | undefined;
    public constructor(criteria?: any, name?: any, searchType?: any) { 
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
    public set epsId(epsId: string | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId() {
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
    public set searchType(searchType: string | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType() {
        return this['search_type'];
    }
}