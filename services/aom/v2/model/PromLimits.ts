

export class PromLimits {
    private 'compactor_blocks_retention_period'?: PromLimitsCompactorBlocksRetentionPeriodEnum | string;
    public constructor(compactorBlocksRetentionPeriod?: string) { 
        this['compactor_blocks_retention_period'] = compactorBlocksRetentionPeriod;
    }
    public withCompactorBlocksRetentionPeriod(compactorBlocksRetentionPeriod: PromLimitsCompactorBlocksRetentionPeriodEnum | string): PromLimits {
        this['compactor_blocks_retention_period'] = compactorBlocksRetentionPeriod;
        return this;
    }
    public set compactorBlocksRetentionPeriod(compactorBlocksRetentionPeriod: PromLimitsCompactorBlocksRetentionPeriodEnum | string  | undefined) {
        this['compactor_blocks_retention_period'] = compactorBlocksRetentionPeriod;
    }
    public get compactorBlocksRetentionPeriod(): PromLimitsCompactorBlocksRetentionPeriodEnum | string | undefined {
        return this['compactor_blocks_retention_period'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PromLimitsCompactorBlocksRetentionPeriodEnum {
    E_360H = '\"360h\"',
    E_720H = ' \"720h\"',
    E_1440H = ' \"1440h\"',
    E_2160H = ' \"2160h\"'
}
