

export class ProxyEngineRisk {
    public level?: number;
    public suggest?: string;
    public influence?: string;
    public guidance?: string;
    private 'service_impact_duration'?: string;
    private 'upgrade_duration'?: string;
    public constructor() { 
    }
    public withLevel(level: number): ProxyEngineRisk {
        this['level'] = level;
        return this;
    }
    public withSuggest(suggest: string): ProxyEngineRisk {
        this['suggest'] = suggest;
        return this;
    }
    public withInfluence(influence: string): ProxyEngineRisk {
        this['influence'] = influence;
        return this;
    }
    public withGuidance(guidance: string): ProxyEngineRisk {
        this['guidance'] = guidance;
        return this;
    }
    public withServiceImpactDuration(serviceImpactDuration: string): ProxyEngineRisk {
        this['service_impact_duration'] = serviceImpactDuration;
        return this;
    }
    public set serviceImpactDuration(serviceImpactDuration: string  | undefined) {
        this['service_impact_duration'] = serviceImpactDuration;
    }
    public get serviceImpactDuration(): string | undefined {
        return this['service_impact_duration'];
    }
    public withUpgradeDuration(upgradeDuration: string): ProxyEngineRisk {
        this['upgrade_duration'] = upgradeDuration;
        return this;
    }
    public set upgradeDuration(upgradeDuration: string  | undefined) {
        this['upgrade_duration'] = upgradeDuration;
    }
    public get upgradeDuration(): string | undefined {
        return this['upgrade_duration'];
    }
}