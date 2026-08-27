import { EventInstances } from './EventInstances';


export class SetInstanceScheduleEventsRequestBody {
    private 'operation_type'?: string;
    private 'event_instances'?: Array<EventInstances>;
    private 'event_schedule_window'?: object;
    public constructor(operationType?: string, eventInstances?: Array<EventInstances>) { 
        this['operation_type'] = operationType;
        this['event_instances'] = eventInstances;
    }
    public withOperationType(operationType: string): SetInstanceScheduleEventsRequestBody {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withEventInstances(eventInstances: Array<EventInstances>): SetInstanceScheduleEventsRequestBody {
        this['event_instances'] = eventInstances;
        return this;
    }
    public set eventInstances(eventInstances: Array<EventInstances>  | undefined) {
        this['event_instances'] = eventInstances;
    }
    public get eventInstances(): Array<EventInstances> | undefined {
        return this['event_instances'];
    }
    public withEventScheduleWindow(eventScheduleWindow: object): SetInstanceScheduleEventsRequestBody {
        this['event_schedule_window'] = eventScheduleWindow;
        return this;
    }
    public set eventScheduleWindow(eventScheduleWindow: object  | undefined) {
        this['event_schedule_window'] = eventScheduleWindow;
    }
    public get eventScheduleWindow(): object | undefined {
        return this['event_schedule_window'];
    }
}