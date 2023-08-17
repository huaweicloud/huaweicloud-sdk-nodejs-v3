

export class ListPipelinesPageLatestRunStageStatusList {
    public name?: string;
    public sequence?: number;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withName(name: string): ListPipelinesPageLatestRunStageStatusList {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: number): ListPipelinesPageLatestRunStageStatusList {
        this['sequence'] = sequence;
        return this;
    }
    public withStatus(status: string): ListPipelinesPageLatestRunStageStatusList {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListPipelinesPageLatestRunStageStatusList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListPipelinesPageLatestRunStageStatusList {
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