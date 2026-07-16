import { AlgorithmResponseAdvancedConfigAutoSearchSearchParams } from './AlgorithmResponseAdvancedConfigAutoSearchSearchParams';
import { JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs } from './JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs';
import { JobAlgorithmResponsePoliciesAutoSearchRewardAttrs } from './JobAlgorithmResponsePoliciesAutoSearchRewardAttrs';


export class AlgorithmResponseAdvancedConfigAutoSearch {
    private 'skip_search_params'?: string;
    private 'reward_attrs'?: Array<JobAlgorithmResponsePoliciesAutoSearchRewardAttrs>;
    private 'search_params'?: Array<AlgorithmResponseAdvancedConfigAutoSearchSearchParams>;
    private 'algo_configs'?: Array<JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs>;
    public constructor() { 
    }
    public withSkipSearchParams(skipSearchParams: string): AlgorithmResponseAdvancedConfigAutoSearch {
        this['skip_search_params'] = skipSearchParams;
        return this;
    }
    public set skipSearchParams(skipSearchParams: string  | undefined) {
        this['skip_search_params'] = skipSearchParams;
    }
    public get skipSearchParams(): string | undefined {
        return this['skip_search_params'];
    }
    public withRewardAttrs(rewardAttrs: Array<JobAlgorithmResponsePoliciesAutoSearchRewardAttrs>): AlgorithmResponseAdvancedConfigAutoSearch {
        this['reward_attrs'] = rewardAttrs;
        return this;
    }
    public set rewardAttrs(rewardAttrs: Array<JobAlgorithmResponsePoliciesAutoSearchRewardAttrs>  | undefined) {
        this['reward_attrs'] = rewardAttrs;
    }
    public get rewardAttrs(): Array<JobAlgorithmResponsePoliciesAutoSearchRewardAttrs> | undefined {
        return this['reward_attrs'];
    }
    public withSearchParams(searchParams: Array<AlgorithmResponseAdvancedConfigAutoSearchSearchParams>): AlgorithmResponseAdvancedConfigAutoSearch {
        this['search_params'] = searchParams;
        return this;
    }
    public set searchParams(searchParams: Array<AlgorithmResponseAdvancedConfigAutoSearchSearchParams>  | undefined) {
        this['search_params'] = searchParams;
    }
    public get searchParams(): Array<AlgorithmResponseAdvancedConfigAutoSearchSearchParams> | undefined {
        return this['search_params'];
    }
    public withAlgoConfigs(algoConfigs: Array<JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs>): AlgorithmResponseAdvancedConfigAutoSearch {
        this['algo_configs'] = algoConfigs;
        return this;
    }
    public set algoConfigs(algoConfigs: Array<JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs>  | undefined) {
        this['algo_configs'] = algoConfigs;
    }
    public get algoConfigs(): Array<JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs> | undefined {
        return this['algo_configs'];
    }
}