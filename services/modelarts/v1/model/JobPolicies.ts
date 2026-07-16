import { AutoSearch } from './AutoSearch';


export class JobPolicies {
    private 'auto_search'?: AutoSearch;
    public constructor() { 
    }
    public withAutoSearch(autoSearch: AutoSearch): JobPolicies {
        this['auto_search'] = autoSearch;
        return this;
    }
    public set autoSearch(autoSearch: AutoSearch  | undefined) {
        this['auto_search'] = autoSearch;
    }
    public get autoSearch(): AutoSearch | undefined {
        return this['auto_search'];
    }
}