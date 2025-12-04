import { EventInstance } from './EventInstance';
import { EventScheduleWindow } from './EventScheduleWindow';


export class OperateEventReq {
    private 'event_instances'?: Array<EventInstance>;
    private 'operation_type'?: string;
    private 'event_schedule_window'?: EventScheduleWindow;
    public constructor(eventInstances?: Array<EventInstance>, operationType?: string) { 
        this['event_instances'] = eventInstances;
        this['operation_type'] = operationType;
    }
    public withEventInstances(eventInstances: Array<EventInstance>): OperateEventReq {
        this['event_instances'] = eventInstances;
        return this;
    }
    public set eventInstances(eventInstances: Array<EventInstance>  | undefined) {
        this['event_instances'] = eventInstances;
    }
    public get eventInstances(): Array<EventInstance> | undefined {
        return this['event_instances'];
    }
    public withOperationType(operationType: string): OperateEventReq {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withEventScheduleWindow(eventScheduleWindow: EventScheduleWindow): OperateEventReq {
        this['event_schedule_window'] = eventScheduleWindow;
        return this;
    }
    public set eventScheduleWindow(eventScheduleWindow: EventScheduleWindow  | undefined) {
        this['event_schedule_window'] = eventScheduleWindow;
    }
    public get eventScheduleWindow(): EventScheduleWindow | undefined {
        return this['event_schedule_window'];
    }
}