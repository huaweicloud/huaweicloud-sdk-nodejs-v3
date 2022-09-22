

export class SubTask {
    public id?: number;
    public name?: string;
    public progress: number;
    private 'start_date'?: number | undefined;
    private 'end_date'?: number | undefined;
    private 'migrate_speed'?: number | undefined;
    private 'user_op'?: string | undefined;
    private 'process_trace'?: string | undefined;
    public constructor(progress?: any) { 
        this['progress'] = progress;
    }
    public withId(id: number): SubTask {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubTask {
        this['name'] = name;
        return this;
    }
    public withProgress(progress: number): SubTask {
        this['progress'] = progress;
        return this;
    }
    public withStartDate(startDate: number): SubTask {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withEndDate(endDate: number): SubTask {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: number | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate() {
        return this['end_date'];
    }
    public withMigrateSpeed(migrateSpeed: number): SubTask {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed() {
        return this['migrate_speed'];
    }
    public withUserOp(userOp: string): SubTask {
        this['user_op'] = userOp;
        return this;
    }
    public set userOp(userOp: string | undefined) {
        this['user_op'] = userOp;
    }
    public get userOp() {
        return this['user_op'];
    }
    public withProcessTrace(processTrace: string): SubTask {
        this['process_trace'] = processTrace;
        return this;
    }
    public set processTrace(processTrace: string | undefined) {
        this['process_trace'] = processTrace;
    }
    public get processTrace() {
        return this['process_trace'];
    }
}