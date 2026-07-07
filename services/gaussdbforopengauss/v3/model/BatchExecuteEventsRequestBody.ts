import { EventInstanceOption } from './EventInstanceOption';
import { EventScheduleWindowOption } from './EventScheduleWindowOption';


export class BatchExecuteEventsRequestBody {
    private 'event_instances'?: Array<EventInstanceOption>;
    private 'operation_type'?: string;
    private 'event_schedule_window'?: EventScheduleWindowOption;
    public constructor(eventInstances?: Array<EventInstanceOption>, operationType?: string) { 
        this['event_instances'] = eventInstances;
        this['operation_type'] = operationType;
    }
    public withEventInstances(eventInstances: Array<EventInstanceOption>): BatchExecuteEventsRequestBody {
        this['event_instances'] = eventInstances;
        return this;
    }
    public set eventInstances(eventInstances: Array<EventInstanceOption>  | undefined) {
        this['event_instances'] = eventInstances;
    }
    public get eventInstances(): Array<EventInstanceOption> | undefined {
        return this['event_instances'];
    }
    public withOperationType(operationType: string): BatchExecuteEventsRequestBody {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withEventScheduleWindow(eventScheduleWindow: EventScheduleWindowOption): BatchExecuteEventsRequestBody {
        this['event_schedule_window'] = eventScheduleWindow;
        return this;
    }
    public set eventScheduleWindow(eventScheduleWindow: EventScheduleWindowOption  | undefined) {
        this['event_schedule_window'] = eventScheduleWindow;
    }
    public get eventScheduleWindow(): EventScheduleWindowOption | undefined {
        return this['event_schedule_window'];
    }
}