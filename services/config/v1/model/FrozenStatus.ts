

export class FrozenStatus {
    private 'is_frozen'?: boolean;
    private 'frozen_scene'?: Array<string>;
    public constructor() { 
    }
    public withIsFrozen(isFrozen: boolean): FrozenStatus {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
    public withFrozenScene(frozenScene: Array<string>): FrozenStatus {
        this['frozen_scene'] = frozenScene;
        return this;
    }
    public set frozenScene(frozenScene: Array<string>  | undefined) {
        this['frozen_scene'] = frozenScene;
    }
    public get frozenScene(): Array<string> | undefined {
        return this['frozen_scene'];
    }
}