

export class BotMDefenseLevel {
    public threshold?: number;
    private 'defense_action'?: number;
    public constructor() { 
    }
    public withThreshold(threshold: number): BotMDefenseLevel {
        this['threshold'] = threshold;
        return this;
    }
    public withDefenseAction(defenseAction: number): BotMDefenseLevel {
        this['defense_action'] = defenseAction;
        return this;
    }
    public set defenseAction(defenseAction: number  | undefined) {
        this['defense_action'] = defenseAction;
    }
    public get defenseAction(): number | undefined {
        return this['defense_action'];
    }
}