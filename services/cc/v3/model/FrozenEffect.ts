import { FrozenEffectEnum } from './FrozenEffectEnum';


export class FrozenEffect {
    private 'frozen_effect'?: FrozenEffectEnum;
    public constructor() { 
    }
    public withFrozenEffect(frozenEffect: FrozenEffectEnum): FrozenEffect {
        this['frozen_effect'] = frozenEffect;
        return this;
    }
    public set frozenEffect(frozenEffect: FrozenEffectEnum  | undefined) {
        this['frozen_effect'] = frozenEffect;
    }
    public get frozenEffect(): FrozenEffectEnum | undefined {
        return this['frozen_effect'];
    }
}