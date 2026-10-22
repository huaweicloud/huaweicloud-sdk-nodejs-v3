

export class UnitGroupPolicy {
    private 'schedule_scope'?: string;
    public constructor() { 
    }
    public withScheduleScope(scheduleScope: string): UnitGroupPolicy {
        this['schedule_scope'] = scheduleScope;
        return this;
    }
    public set scheduleScope(scheduleScope: string  | undefined) {
        this['schedule_scope'] = scheduleScope;
    }
    public get scheduleScope(): string | undefined {
        return this['schedule_scope'];
    }
}