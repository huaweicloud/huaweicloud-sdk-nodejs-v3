import { BatchStartServersOption } from './BatchStartServersOption';


export class BatchStartServersRequestBody {
    private 'os-start': BatchStartServersOption | undefined;
    public constructor(osStart?: any) { 
        this['os-start'] = osStart;
    }
    public withOsStart(osStart: BatchStartServersOption): BatchStartServersRequestBody {
        this['os-start'] = osStart;
        return this;
    }
    public set osStart(osStart: BatchStartServersOption | undefined) {
        this['os-start'] = osStart;
    }
    public get osStart() {
        return this['os-start'];
    }
}