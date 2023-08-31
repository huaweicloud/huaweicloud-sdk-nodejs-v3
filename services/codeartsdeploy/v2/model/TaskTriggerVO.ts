

export class TaskTriggerVO {
    private 'trigger_source'?: string;
    private 'artifact_source_system'?: string;
    private 'artifact_type'?: string;
    public constructor() { 
    }
    public withTriggerSource(triggerSource: string): TaskTriggerVO {
        this['trigger_source'] = triggerSource;
        return this;
    }
    public set triggerSource(triggerSource: string  | undefined) {
        this['trigger_source'] = triggerSource;
    }
    public get triggerSource(): string | undefined {
        return this['trigger_source'];
    }
    public withArtifactSourceSystem(artifactSourceSystem: string): TaskTriggerVO {
        this['artifact_source_system'] = artifactSourceSystem;
        return this;
    }
    public set artifactSourceSystem(artifactSourceSystem: string  | undefined) {
        this['artifact_source_system'] = artifactSourceSystem;
    }
    public get artifactSourceSystem(): string | undefined {
        return this['artifact_source_system'];
    }
    public withArtifactType(artifactType: string): TaskTriggerVO {
        this['artifact_type'] = artifactType;
        return this;
    }
    public set artifactType(artifactType: string  | undefined) {
        this['artifact_type'] = artifactType;
    }
    public get artifactType(): string | undefined {
        return this['artifact_type'];
    }
}