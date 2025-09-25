import { CodeWaitEventTime } from './CodeWaitEventTime';
import { ResourceWaitEventTime } from './ResourceWaitEventTime';


export class WaitEventTime {
    private 'code_wait_event_time'?: CodeWaitEventTime;
    private 'resource_wait_event_time'?: ResourceWaitEventTime;
    public constructor(codeWaitEventTime?: CodeWaitEventTime, resourceWaitEventTime?: ResourceWaitEventTime) { 
        this['code_wait_event_time'] = codeWaitEventTime;
        this['resource_wait_event_time'] = resourceWaitEventTime;
    }
    public withCodeWaitEventTime(codeWaitEventTime: CodeWaitEventTime): WaitEventTime {
        this['code_wait_event_time'] = codeWaitEventTime;
        return this;
    }
    public set codeWaitEventTime(codeWaitEventTime: CodeWaitEventTime  | undefined) {
        this['code_wait_event_time'] = codeWaitEventTime;
    }
    public get codeWaitEventTime(): CodeWaitEventTime | undefined {
        return this['code_wait_event_time'];
    }
    public withResourceWaitEventTime(resourceWaitEventTime: ResourceWaitEventTime): WaitEventTime {
        this['resource_wait_event_time'] = resourceWaitEventTime;
        return this;
    }
    public set resourceWaitEventTime(resourceWaitEventTime: ResourceWaitEventTime  | undefined) {
        this['resource_wait_event_time'] = resourceWaitEventTime;
    }
    public get resourceWaitEventTime(): ResourceWaitEventTime | undefined {
        return this['resource_wait_event_time'];
    }
}