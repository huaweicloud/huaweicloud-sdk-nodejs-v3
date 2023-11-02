import { EventParam } from './EventParam';


export class BehaviorRestBody {
    public event?: string;
    public params?: Array<EventParam>;
    public constructor(event?: string, params?: Array<EventParam>) { 
        this['event'] = event;
        this['params'] = params;
    }
    public withEvent(event: string): BehaviorRestBody {
        this['event'] = event;
        return this;
    }
    public withParams(params: Array<EventParam>): BehaviorRestBody {
        this['params'] = params;
        return this;
    }
}