

export class PipelineTemplateSimpleVOStages {
    public name?: string;
    public sequence?: number;
    public constructor() { 
    }
    public withName(name: string): PipelineTemplateSimpleVOStages {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: number): PipelineTemplateSimpleVOStages {
        this['sequence'] = sequence;
        return this;
    }
}