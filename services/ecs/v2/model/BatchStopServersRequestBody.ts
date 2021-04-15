import { BatchStopServersOption } from './BatchStopServersOption';


export class BatchStopServersRequestBody {
    private 'os-stop': BatchStopServersOption | undefined;
    public constructor(osStop?: any) { 
        this['os-stop'] = osStop;
    }
    public withOsStop(osStop: BatchStopServersOption): BatchStopServersRequestBody {
        this['os-stop'] = osStop;
        return this;
    }
    public set osStop(osStop: BatchStopServersOption | undefined) {
        this['os-stop'] = osStop;
    }
    public get osStop() {
        return this['os-stop'];
    }
}