import { IefEvent } from './IefEvent';


export class CreateIefSystemEventsRequestBody {
    public data?: IefEvent;
    public constructor(data?: IefEvent) { 
        this['data'] = data;
    }
    public withData(data: IefEvent): CreateIefSystemEventsRequestBody {
        this['data'] = data;
        return this;
    }
}