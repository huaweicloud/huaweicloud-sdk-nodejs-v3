

export class RequiredAffinityResp {
    private 'affinity_type'?: string;
    private 'job_level'?: string;
    private 'affinity_group_size'?: number;
    private 'affinity_group_level'?: string;
    public constructor() { 
    }
    public withAffinityType(affinityType: string): RequiredAffinityResp {
        this['affinity_type'] = affinityType;
        return this;
    }
    public set affinityType(affinityType: string  | undefined) {
        this['affinity_type'] = affinityType;
    }
    public get affinityType(): string | undefined {
        return this['affinity_type'];
    }
    public withJobLevel(jobLevel: string): RequiredAffinityResp {
        this['job_level'] = jobLevel;
        return this;
    }
    public set jobLevel(jobLevel: string  | undefined) {
        this['job_level'] = jobLevel;
    }
    public get jobLevel(): string | undefined {
        return this['job_level'];
    }
    public withAffinityGroupSize(affinityGroupSize: number): RequiredAffinityResp {
        this['affinity_group_size'] = affinityGroupSize;
        return this;
    }
    public set affinityGroupSize(affinityGroupSize: number  | undefined) {
        this['affinity_group_size'] = affinityGroupSize;
    }
    public get affinityGroupSize(): number | undefined {
        return this['affinity_group_size'];
    }
    public withAffinityGroupLevel(affinityGroupLevel: string): RequiredAffinityResp {
        this['affinity_group_level'] = affinityGroupLevel;
        return this;
    }
    public set affinityGroupLevel(affinityGroupLevel: string  | undefined) {
        this['affinity_group_level'] = affinityGroupLevel;
    }
    public get affinityGroupLevel(): string | undefined {
        return this['affinity_group_level'];
    }
}