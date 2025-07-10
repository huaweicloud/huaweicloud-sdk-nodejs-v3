

export class BestPracticeCheckItemDetail {
    private 'check_item'?: number;
    private 'check_item_name'?: string;
    private 'risk_description'?: string;
    public result?: string;
    public scene?: string;
    private 'risk_level'?: string;
    public constructor() { 
    }
    public withCheckItem(checkItem: number): BestPracticeCheckItemDetail {
        this['check_item'] = checkItem;
        return this;
    }
    public set checkItem(checkItem: number  | undefined) {
        this['check_item'] = checkItem;
    }
    public get checkItem(): number | undefined {
        return this['check_item'];
    }
    public withCheckItemName(checkItemName: string): BestPracticeCheckItemDetail {
        this['check_item_name'] = checkItemName;
        return this;
    }
    public set checkItemName(checkItemName: string  | undefined) {
        this['check_item_name'] = checkItemName;
    }
    public get checkItemName(): string | undefined {
        return this['check_item_name'];
    }
    public withRiskDescription(riskDescription: string): BestPracticeCheckItemDetail {
        this['risk_description'] = riskDescription;
        return this;
    }
    public set riskDescription(riskDescription: string  | undefined) {
        this['risk_description'] = riskDescription;
    }
    public get riskDescription(): string | undefined {
        return this['risk_description'];
    }
    public withResult(result: string): BestPracticeCheckItemDetail {
        this['result'] = result;
        return this;
    }
    public withScene(scene: string): BestPracticeCheckItemDetail {
        this['scene'] = scene;
        return this;
    }
    public withRiskLevel(riskLevel: string): BestPracticeCheckItemDetail {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
}