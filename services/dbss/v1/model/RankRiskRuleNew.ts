

export class RankRiskRuleNew {
    public id?: string;
    private 'new_rank'?: number;
    public constructor(id?: string, newRank?: number) { 
        this['id'] = id;
        this['new_rank'] = newRank;
    }
    public withId(id: string): RankRiskRuleNew {
        this['id'] = id;
        return this;
    }
    public withNewRank(newRank: number): RankRiskRuleNew {
        this['new_rank'] = newRank;
        return this;
    }
    public set newRank(newRank: number  | undefined) {
        this['new_rank'] = newRank;
    }
    public get newRank(): number | undefined {
        return this['new_rank'];
    }
}