

export class FrozenInfo {
    public scene?: string;
    public effect?: number;
    public constructor() { 
    }
    public withScene(scene: string): FrozenInfo {
        this['scene'] = scene;
        return this;
    }
    public withEffect(effect: number): FrozenInfo {
        this['effect'] = effect;
        return this;
    }
}