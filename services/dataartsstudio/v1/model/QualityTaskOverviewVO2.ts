

export class QualityTaskOverviewVO2 {
    public id?: number;
    public name?: string;
    private 'category_id'?: number;
    private 'schedule_status'?: string;
    private 'schedule_period'?: string;
    private 'schedule_interval'?: string;
    private 'create_time'?: number;
    private 'last_run_time'?: number;
    public creator?: string;
    public constructor() { 
    }
    public withId(id: number): QualityTaskOverviewVO2 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QualityTaskOverviewVO2 {
        this['name'] = name;
        return this;
    }
    public withCategoryId(categoryId: number): QualityTaskOverviewVO2 {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withScheduleStatus(scheduleStatus: string): QualityTaskOverviewVO2 {
        this['schedule_status'] = scheduleStatus;
        return this;
    }
    public set scheduleStatus(scheduleStatus: string  | undefined) {
        this['schedule_status'] = scheduleStatus;
    }
    public get scheduleStatus(): string | undefined {
        return this['schedule_status'];
    }
    public withSchedulePeriod(schedulePeriod: string): QualityTaskOverviewVO2 {
        this['schedule_period'] = schedulePeriod;
        return this;
    }
    public set schedulePeriod(schedulePeriod: string  | undefined) {
        this['schedule_period'] = schedulePeriod;
    }
    public get schedulePeriod(): string | undefined {
        return this['schedule_period'];
    }
    public withScheduleInterval(scheduleInterval: string): QualityTaskOverviewVO2 {
        this['schedule_interval'] = scheduleInterval;
        return this;
    }
    public set scheduleInterval(scheduleInterval: string  | undefined) {
        this['schedule_interval'] = scheduleInterval;
    }
    public get scheduleInterval(): string | undefined {
        return this['schedule_interval'];
    }
    public withCreateTime(createTime: number): QualityTaskOverviewVO2 {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastRunTime(lastRunTime: number): QualityTaskOverviewVO2 {
        this['last_run_time'] = lastRunTime;
        return this;
    }
    public set lastRunTime(lastRunTime: number  | undefined) {
        this['last_run_time'] = lastRunTime;
    }
    public get lastRunTime(): number | undefined {
        return this['last_run_time'];
    }
    public withCreator(creator: string): QualityTaskOverviewVO2 {
        this['creator'] = creator;
        return this;
    }
}