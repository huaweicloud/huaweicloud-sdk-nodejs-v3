

export class RunPipelineDTOParamsBuildParams {
    private 'build_type'?: string;
    private 'target_branch'?: string;
    public tag?: string;
    private 'event_type'?: string;
    public constructor(buildType?: string) { 
        this['build_type'] = buildType;
    }
    public withBuildType(buildType: string): RunPipelineDTOParamsBuildParams {
        this['build_type'] = buildType;
        return this;
    }
    public set buildType(buildType: string  | undefined) {
        this['build_type'] = buildType;
    }
    public get buildType(): string | undefined {
        return this['build_type'];
    }
    public withTargetBranch(targetBranch: string): RunPipelineDTOParamsBuildParams {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withTag(tag: string): RunPipelineDTOParamsBuildParams {
        this['tag'] = tag;
        return this;
    }
    public withEventType(eventType: string): RunPipelineDTOParamsBuildParams {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
}