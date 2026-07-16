import { AlgorithmResponseAdvancedConfigAutoSearch } from './AlgorithmResponseAdvancedConfigAutoSearch';


export class AlgorithmResponseAdvancedConfig {
    private 'auto_search'?: AlgorithmResponseAdvancedConfigAutoSearch;
    public constructor() { 
    }
    public withAutoSearch(autoSearch: AlgorithmResponseAdvancedConfigAutoSearch): AlgorithmResponseAdvancedConfig {
        this['auto_search'] = autoSearch;
        return this;
    }
    public set autoSearch(autoSearch: AlgorithmResponseAdvancedConfigAutoSearch  | undefined) {
        this['auto_search'] = autoSearch;
    }
    public get autoSearch(): AlgorithmResponseAdvancedConfigAutoSearch | undefined {
        return this['auto_search'];
    }
}