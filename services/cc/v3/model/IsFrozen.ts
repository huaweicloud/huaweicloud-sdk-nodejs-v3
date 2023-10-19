

export class IsFrozen {
    private 'is_frozen'?: boolean;
    public constructor(isFrozen?: boolean) { 
        this['is_frozen'] = isFrozen;
    }
    public withIsFrozen(isFrozen: boolean): IsFrozen {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
}