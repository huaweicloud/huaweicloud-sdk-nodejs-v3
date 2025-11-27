import { CapacityOrderResponseRankList } from './CapacityOrderResponseRankList';


export class CapacityOrderResponseData {
    public type?: string;
    private 'rank_list'?: CapacityOrderResponseRankList;
    public constructor() { 
    }
    public withType(type: string): CapacityOrderResponseData {
        this['type'] = type;
        return this;
    }
    public withRankList(rankList: CapacityOrderResponseRankList): CapacityOrderResponseData {
        this['rank_list'] = rankList;
        return this;
    }
    public set rankList(rankList: CapacityOrderResponseRankList  | undefined) {
        this['rank_list'] = rankList;
    }
    public get rankList(): CapacityOrderResponseRankList | undefined {
        return this['rank_list'];
    }
}