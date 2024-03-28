

export class SubJob {
    public id?: number;
    public name?: string;
    public description?: string;
    private 'submission_time'?: string;
    private 'completion_time'?: string;
    private 'stage_ids'?: Array<number>;
    private 'job_group'?: string;
    public status?: string;
    private 'num_tasks'?: number;
    private 'num_active_tasks'?: number;
    private 'num_completed_tasks'?: number;
    private 'num_skipped_tasks'?: number;
    private 'num_failed_tasks'?: number;
    private 'num_killed_tasks'?: number;
    private 'num_completed_indices'?: number;
    private 'num_active_stages'?: number;
    private 'num_completed_stages'?: number;
    private 'num_skipped_stages'?: number;
    private 'num_failed_stages'?: number;
    private 'killed_tasks_summary'?: { [key: string]: number; };
    public constructor() { 
    }
    public withId(id: number): SubJob {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubJob {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SubJob {
        this['description'] = description;
        return this;
    }
    public withSubmissionTime(submissionTime: string): SubJob {
        this['submission_time'] = submissionTime;
        return this;
    }
    public set submissionTime(submissionTime: string  | undefined) {
        this['submission_time'] = submissionTime;
    }
    public get submissionTime(): string | undefined {
        return this['submission_time'];
    }
    public withCompletionTime(completionTime: string): SubJob {
        this['completion_time'] = completionTime;
        return this;
    }
    public set completionTime(completionTime: string  | undefined) {
        this['completion_time'] = completionTime;
    }
    public get completionTime(): string | undefined {
        return this['completion_time'];
    }
    public withStageIds(stageIds: Array<number>): SubJob {
        this['stage_ids'] = stageIds;
        return this;
    }
    public set stageIds(stageIds: Array<number>  | undefined) {
        this['stage_ids'] = stageIds;
    }
    public get stageIds(): Array<number> | undefined {
        return this['stage_ids'];
    }
    public withJobGroup(jobGroup: string): SubJob {
        this['job_group'] = jobGroup;
        return this;
    }
    public set jobGroup(jobGroup: string  | undefined) {
        this['job_group'] = jobGroup;
    }
    public get jobGroup(): string | undefined {
        return this['job_group'];
    }
    public withStatus(status: string): SubJob {
        this['status'] = status;
        return this;
    }
    public withNumTasks(numTasks: number): SubJob {
        this['num_tasks'] = numTasks;
        return this;
    }
    public set numTasks(numTasks: number  | undefined) {
        this['num_tasks'] = numTasks;
    }
    public get numTasks(): number | undefined {
        return this['num_tasks'];
    }
    public withNumActiveTasks(numActiveTasks: number): SubJob {
        this['num_active_tasks'] = numActiveTasks;
        return this;
    }
    public set numActiveTasks(numActiveTasks: number  | undefined) {
        this['num_active_tasks'] = numActiveTasks;
    }
    public get numActiveTasks(): number | undefined {
        return this['num_active_tasks'];
    }
    public withNumCompletedTasks(numCompletedTasks: number): SubJob {
        this['num_completed_tasks'] = numCompletedTasks;
        return this;
    }
    public set numCompletedTasks(numCompletedTasks: number  | undefined) {
        this['num_completed_tasks'] = numCompletedTasks;
    }
    public get numCompletedTasks(): number | undefined {
        return this['num_completed_tasks'];
    }
    public withNumSkippedTasks(numSkippedTasks: number): SubJob {
        this['num_skipped_tasks'] = numSkippedTasks;
        return this;
    }
    public set numSkippedTasks(numSkippedTasks: number  | undefined) {
        this['num_skipped_tasks'] = numSkippedTasks;
    }
    public get numSkippedTasks(): number | undefined {
        return this['num_skipped_tasks'];
    }
    public withNumFailedTasks(numFailedTasks: number): SubJob {
        this['num_failed_tasks'] = numFailedTasks;
        return this;
    }
    public set numFailedTasks(numFailedTasks: number  | undefined) {
        this['num_failed_tasks'] = numFailedTasks;
    }
    public get numFailedTasks(): number | undefined {
        return this['num_failed_tasks'];
    }
    public withNumKilledTasks(numKilledTasks: number): SubJob {
        this['num_killed_tasks'] = numKilledTasks;
        return this;
    }
    public set numKilledTasks(numKilledTasks: number  | undefined) {
        this['num_killed_tasks'] = numKilledTasks;
    }
    public get numKilledTasks(): number | undefined {
        return this['num_killed_tasks'];
    }
    public withNumCompletedIndices(numCompletedIndices: number): SubJob {
        this['num_completed_indices'] = numCompletedIndices;
        return this;
    }
    public set numCompletedIndices(numCompletedIndices: number  | undefined) {
        this['num_completed_indices'] = numCompletedIndices;
    }
    public get numCompletedIndices(): number | undefined {
        return this['num_completed_indices'];
    }
    public withNumActiveStages(numActiveStages: number): SubJob {
        this['num_active_stages'] = numActiveStages;
        return this;
    }
    public set numActiveStages(numActiveStages: number  | undefined) {
        this['num_active_stages'] = numActiveStages;
    }
    public get numActiveStages(): number | undefined {
        return this['num_active_stages'];
    }
    public withNumCompletedStages(numCompletedStages: number): SubJob {
        this['num_completed_stages'] = numCompletedStages;
        return this;
    }
    public set numCompletedStages(numCompletedStages: number  | undefined) {
        this['num_completed_stages'] = numCompletedStages;
    }
    public get numCompletedStages(): number | undefined {
        return this['num_completed_stages'];
    }
    public withNumSkippedStages(numSkippedStages: number): SubJob {
        this['num_skipped_stages'] = numSkippedStages;
        return this;
    }
    public set numSkippedStages(numSkippedStages: number  | undefined) {
        this['num_skipped_stages'] = numSkippedStages;
    }
    public get numSkippedStages(): number | undefined {
        return this['num_skipped_stages'];
    }
    public withNumFailedStages(numFailedStages: number): SubJob {
        this['num_failed_stages'] = numFailedStages;
        return this;
    }
    public set numFailedStages(numFailedStages: number  | undefined) {
        this['num_failed_stages'] = numFailedStages;
    }
    public get numFailedStages(): number | undefined {
        return this['num_failed_stages'];
    }
    public withKilledTasksSummary(killedTasksSummary: { [key: string]: number; }): SubJob {
        this['killed_tasks_summary'] = killedTasksSummary;
        return this;
    }
    public set killedTasksSummary(killedTasksSummary: { [key: string]: number; }  | undefined) {
        this['killed_tasks_summary'] = killedTasksSummary;
    }
    public get killedTasksSummary(): { [key: string]: number; } | undefined {
        return this['killed_tasks_summary'];
    }
}