

export class SubTask {
    public id?: number;
    public name?: string;
    public progress?: number;
    private 'start_date'?: number;
    private 'end_date'?: number;
    private 'migrate_speed'?: number;
    private 'user_op'?: string;
    private 'process_trace'?: string;
    public constructor(progress?: number) { 
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
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: number): SubTask {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: number  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): number | undefined {
        return this['end_date'];
    }
    public withMigrateSpeed(migrateSpeed: number): SubTask {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number  | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed(): number | undefined {
        return this['migrate_speed'];
    }
    public withUserOp(userOp: string): SubTask {
        this['user_op'] = userOp;
        return this;
    }
    public set userOp(userOp: string  | undefined) {
        this['user_op'] = userOp;
    }
    public get userOp(): string | undefined {
        return this['user_op'];
    }
    public withProcessTrace(processTrace: string): SubTask {
        this['process_trace'] = processTrace;
        return this;
    }
    public set processTrace(processTrace: string  | undefined) {
        this['process_trace'] = processTrace;
    }
    public get processTrace(): string | undefined {
        return this['process_trace'];
    }
}