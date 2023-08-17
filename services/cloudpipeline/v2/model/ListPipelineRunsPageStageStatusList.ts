

export class ListPipelineRunsPageStageStatusList {
    public name?: string;
    public sequence?: number;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withName(name: string): ListPipelineRunsPageStageStatusList {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: number): ListPipelineRunsPageStageStatusList {
        this['sequence'] = sequence;
        return this;
    }
    public withStatus(status: string): ListPipelineRunsPageStageStatusList {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListPipelineRunsPageStageStatusList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListPipelineRunsPageStageStatusList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}