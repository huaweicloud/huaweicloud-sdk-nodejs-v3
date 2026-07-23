import { ModifyJobScheduleRequestBody } from './ModifyJobScheduleRequestBody';


export class ModifyJobScheduleRequest {
    private 'schedule_id'?: string;
    public body?: ModifyJobScheduleRequestBody;
    public constructor(scheduleId?: string) { 
        this['schedule_id'] = scheduleId;
    }
    public withScheduleId(scheduleId: string): ModifyJobScheduleRequest {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
    public withBody(body: ModifyJobScheduleRequestBody): ModifyJobScheduleRequest {
        this['body'] = body;
        return this;
    }
}