

export class Risks {
    private 'instance_id'?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    public level?: number;
    public suggest?: string;
    public influence?: string;
    public guidance?: string;
    private 'service_impact_duration'?: string;
    private 'upgrade_duration'?: string;
    public constructor(instanceId?: string, engineName?: string, engineVersion?: string) { 
        this['instance_id'] = instanceId;
        this['engine_name'] = engineName;
        this['engine_version'] = engineVersion;
    }
    public withInstanceId(instanceId: string): Risks {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineName(engineName: string): Risks {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): Risks {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withLevel(level: number): Risks {
        this['level'] = level;
        return this;
    }
    public withSuggest(suggest: string): Risks {
        this['suggest'] = suggest;
        return this;
    }
    public withInfluence(influence: string): Risks {
        this['influence'] = influence;
        return this;
    }
    public withGuidance(guidance: string): Risks {
        this['guidance'] = guidance;
        return this;
    }
    public withServiceImpactDuration(serviceImpactDuration: string): Risks {
        this['service_impact_duration'] = serviceImpactDuration;
        return this;
    }
    public set serviceImpactDuration(serviceImpactDuration: string  | undefined) {
        this['service_impact_duration'] = serviceImpactDuration;
    }
    public get serviceImpactDuration(): string | undefined {
        return this['service_impact_duration'];
    }
    public withUpgradeDuration(upgradeDuration: string): Risks {
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