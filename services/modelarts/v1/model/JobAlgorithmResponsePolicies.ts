import { JobAlgorithmResponsePoliciesAutoSearch } from './JobAlgorithmResponsePoliciesAutoSearch';


export class JobAlgorithmResponsePolicies {
    private 'auto_search'?: JobAlgorithmResponsePoliciesAutoSearch;
    public constructor() { 
    }
    public withAutoSearch(autoSearch: JobAlgorithmResponsePoliciesAutoSearch): JobAlgorithmResponsePolicies {
        this['auto_search'] = autoSearch;
        return this;
    }
    public set autoSearch(autoSearch: JobAlgorithmResponsePoliciesAutoSearch  | undefined) {
        this['auto_search'] = autoSearch;
    }
    public get autoSearch(): JobAlgorithmResponsePoliciesAutoSearch | undefined {
        return this['auto_search'];
    }
}