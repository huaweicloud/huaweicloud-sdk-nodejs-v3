import { AlgoConfigs } from './AlgoConfigs';
import { RewardAttrs } from './RewardAttrs';
import { SearchParams } from './SearchParams';


export class AutoSearch {
    private 'skip_search_params'?: string;
    private 'reward_attrs'?: Array<RewardAttrs>;
    private 'search_params'?: Array<SearchParams>;
    private 'algo_configs'?: Array<AlgoConfigs>;
    public constructor() { 
    }
    public withSkipSearchParams(skipSearchParams: string): AutoSearch {
        this['skip_search_params'] = skipSearchParams;
        return this;
    }
    public set skipSearchParams(skipSearchParams: string  | undefined) {
        this['skip_search_params'] = skipSearchParams;
    }
    public get skipSearchParams(): string | undefined {
        return this['skip_search_params'];
    }
    public withRewardAttrs(rewardAttrs: Array<RewardAttrs>): AutoSearch {
        this['reward_attrs'] = rewardAttrs;
        return this;
    }
    public set rewardAttrs(rewardAttrs: Array<RewardAttrs>  | undefined) {
        this['reward_attrs'] = rewardAttrs;
    }
    public get rewardAttrs(): Array<RewardAttrs> | undefined {
        return this['reward_attrs'];
    }
    public withSearchParams(searchParams: Array<SearchParams>): AutoSearch {
        this['search_params'] = searchParams;
        return this;
    }
    public set searchParams(searchParams: Array<SearchParams>  | undefined) {
        this['search_params'] = searchParams;
    }
    public get searchParams(): Array<SearchParams> | undefined {
        return this['search_params'];
    }
    public withAlgoConfigs(algoConfigs: Array<AlgoConfigs>): AutoSearch {
        this['algo_configs'] = algoConfigs;
        return this;
    }
    public set algoConfigs(algoConfigs: Array<AlgoConfigs>  | undefined) {
        this['algo_configs'] = algoConfigs;
    }
    public get algoConfigs(): Array<AlgoConfigs> | undefined {
        return this['algo_configs'];
    }
}