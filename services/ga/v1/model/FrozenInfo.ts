

export class FrozenInfo {
    public status?: number;
    public effect?: number;
    public scene?: Array<string>;
    public constructor() { 
    }
    public withStatus(status: number): FrozenInfo {
        this['status'] = status;
        return this;
    }
    public withEffect(effect: number): FrozenInfo {
        this['effect'] = effect;
        return this;
    }
    public withScene(scene: Array<string>): FrozenInfo {
        this['scene'] = scene;
        return this;
    }
}