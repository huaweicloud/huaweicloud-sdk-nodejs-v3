

export class DurationStrategies {
    public strategy?: string;
    private 'estimated_upgrade_duration'?: number;
    public constructor(strategy?: string, estimatedUpgradeDuration?: number) { 
        this['strategy'] = strategy;
        this['estimated_upgrade_duration'] = estimatedUpgradeDuration;
    }
    public withStrategy(strategy: string): DurationStrategies {
        this['strategy'] = strategy;
        return this;
    }
    public withEstimatedUpgradeDuration(estimatedUpgradeDuration: number): DurationStrategies {
        this['estimated_upgrade_duration'] = estimatedUpgradeDuration;
        return this;
    }
    public set estimatedUpgradeDuration(estimatedUpgradeDuration: number  | undefined) {
        this['estimated_upgrade_duration'] = estimatedUpgradeDuration;
    }
    public get estimatedUpgradeDuration(): number | undefined {
        return this['estimated_upgrade_duration'];
    }
}