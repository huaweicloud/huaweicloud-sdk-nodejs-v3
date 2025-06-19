

export class IpBlacklistDeleteDto {
    private 'effect_scope'?: Array<number>;
    public constructor() { 
    }
    public withEffectScope(effectScope: Array<number>): IpBlacklistDeleteDto {
        this['effect_scope'] = effectScope;
        return this;
    }
    public set effectScope(effectScope: Array<number>  | undefined) {
        this['effect_scope'] = effectScope;
    }
    public get effectScope(): Array<number> | undefined {
        return this['effect_scope'];
    }
}