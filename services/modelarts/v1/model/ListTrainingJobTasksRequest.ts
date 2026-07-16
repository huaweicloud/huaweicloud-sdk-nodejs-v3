

export class ListTrainingJobTasksRequest {
    private 'training_job_id'?: string;
    private 'schedule_count'?: number;
    public constructor(trainingJobId?: string) { 
        this['training_job_id'] = trainingJobId;
    }
    public withTrainingJobId(trainingJobId: string): ListTrainingJobTasksRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withScheduleCount(scheduleCount: number): ListTrainingJobTasksRequest {
        this['schedule_count'] = scheduleCount;
        return this;
    }
    public set scheduleCount(scheduleCount: number  | undefined) {
        this['schedule_count'] = scheduleCount;
    }
    public get scheduleCount(): number | undefined {
        return this['schedule_count'];
    }
}