import { IefEvents } from './IefEvents';


export class IefSystemEventsReq {
    public data?: IefEvents;
    public constructor(data?: IefEvents) { 
        this['data'] = data;
    }
    public withData(data: IefEvents): IefSystemEventsReq {
        this['data'] = data;
        return this;
    }
}