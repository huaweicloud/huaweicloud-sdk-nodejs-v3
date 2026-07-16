

export class TrainingExperimentStatistic {
    private 'job_count'?: number;
    public constructor() { 
    }
    public withJobCount(jobCount: number): TrainingExperimentStatistic {
        this['job_count'] = jobCount;
        return this;
    }
    public set jobCount(jobCount: number  | undefined) {
        this['job_count'] = jobCount;
    }
    public get jobCount(): number | undefined {
        return this['job_count'];
    }
}