

export class CustomerUpgradeDatabaseVersionReqNew {
    private 'is_delayed'?: boolean;
    public constructor() { 
    }
    public withIsDelayed(isDelayed: boolean): CustomerUpgradeDatabaseVersionReqNew {
        this['is_delayed'] = isDelayed;
        return this;
    }
    public set isDelayed(isDelayed: boolean  | undefined) {
        this['is_delayed'] = isDelayed;
    }
    public get isDelayed(): boolean | undefined {
        return this['is_delayed'];
    }
}