import { JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs } from './JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs';
import { JobAlgorithmResponsePoliciesAutoSearchRewardAttrs } from './JobAlgorithmResponsePoliciesAutoSearchRewardAttrs';
import { JobAlgorithmResponsePoliciesAutoSearchSearchParams } from './JobAlgorithmResponsePoliciesAutoSearchSearchParams';


export class JobAlgorithmResponsePoliciesAutoSearch {
    private 'skip_search_params'?: string;
    private 'reward_attrs'?: Array<JobAlgorithmResponsePoliciesAutoSearchRewardAttrs>;
    private 'search_params'?: Array<JobAlgorithmResponsePoliciesAutoSearchSearchParams>;
    private 'algo_configs'?: Array<JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs>;
    public constructor() { 
    }
    public withSkipSearchParams(skipSearchParams: string): JobAlgorithmResponsePoliciesAutoSearch {
        this['skip_search_params'] = skipSearchParams;
        return this;
    }
    public set skipSearchParams(skipSearchParams: string  | undefined) {
        this['skip_search_params'] = skipSearchParams;
    }
    public get skipSearchParams(): string | undefined {
        return this['skip_search_params'];
    }
    public withRewardAttrs(rewardAttrs: Array<JobAlgorithmResponsePoliciesAutoSearchRewardAttrs>): JobAlgorithmResponsePoliciesAutoSearch {
        this['reward_attrs'] = rewardAttrs;
        return this;
    }
    public set rewardAttrs(rewardAttrs: Array<JobAlgorithmResponsePoliciesAutoSearchRewardAttrs>  | undefined) {
        this['reward_attrs'] = rewardAttrs;
    }
    public get rewardAttrs(): Array<JobAlgorithmResponsePoliciesAutoSearchRewardAttrs> | undefined {
        return this['reward_attrs'];
    }
    public withSearchParams(searchParams: Array<JobAlgorithmResponsePoliciesAutoSearchSearchParams>): JobAlgorithmResponsePoliciesAutoSearch {
        this['search_params'] = searchParams;
        return this;
    }
    public set searchParams(searchParams: Array<JobAlgorithmResponsePoliciesAutoSearchSearchParams>  | undefined) {
        this['search_params'] = searchParams;
    }
    public get searchParams(): Array<JobAlgorithmResponsePoliciesAutoSearchSearchParams> | undefined {
        return this['search_params'];
    }
    public withAlgoConfigs(algoConfigs: Array<JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs>): JobAlgorithmResponsePoliciesAutoSearch {
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