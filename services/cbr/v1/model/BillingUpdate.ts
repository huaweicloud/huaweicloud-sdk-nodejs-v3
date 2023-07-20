

export class BillingUpdate {
    private 'consistent_level'?: BillingUpdateConsistentLevelEnum | string;
    public size?: number;
    public constructor() { 
    }
    public withConsistentLevel(consistentLevel: BillingUpdateConsistentLevelEnum | string): BillingUpdate {
        this['consistent_level'] = consistentLevel;
        return this;
    }
    public set consistentLevel(consistentLevel: BillingUpdateConsistentLevelEnum | string  | undefined) {
        this['consistent_level'] = consistentLevel;
    }
    public get consistentLevel(): BillingUpdateConsistentLevelEnum | string | undefined {
        return this['consistent_level'];
    }
    public withSize(size: number): BillingUpdate {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BillingUpdateConsistentLevelEnum {
    APP_CONSISTENT = 'app_consistent',
    CRASH_CONSISTENT = 'crash_consistent'
}
