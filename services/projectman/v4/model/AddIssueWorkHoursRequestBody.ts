

export class AddIssueWorkHoursRequestBody {
    private 'start_date'?: string;
    private 'due_date'?: string;
    private 'work_hours'?: number;
    private 'work_hours_type_id'?: number;
    public constructor(startDate?: string, dueDate?: string, workHours?: number) { 
        this['start_date'] = startDate;
        this['due_date'] = dueDate;
        this['work_hours'] = workHours;
    }
    public withStartDate(startDate: string): AddIssueWorkHoursRequestBody {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withDueDate(dueDate: string): AddIssueWorkHoursRequestBody {
        this['due_date'] = dueDate;
        return this;
    }
    public set dueDate(dueDate: string  | undefined) {
        this['due_date'] = dueDate;
    }
    public get dueDate(): string | undefined {
        return this['due_date'];
    }
    public withWorkHours(workHours: number): AddIssueWorkHoursRequestBody {
        this['work_hours'] = workHours;
        return this;
    }
    public set workHours(workHours: number  | undefined) {
        this['work_hours'] = workHours;
    }
    public get workHours(): number | undefined {
        return this['work_hours'];
    }
    public withWorkHoursTypeId(workHoursTypeId: number): AddIssueWorkHoursRequestBody {
        this['work_hours_type_id'] = workHoursTypeId;
        return this;
    }
    public set workHoursTypeId(workHoursTypeId: number  | undefined) {
        this['work_hours_type_id'] = workHoursTypeId;
    }
    public get workHoursTypeId(): number | undefined {
        return this['work_hours_type_id'];
    }
}