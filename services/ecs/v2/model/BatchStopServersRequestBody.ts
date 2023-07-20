import { BatchStopServersOption } from './BatchStopServersOption';


export class BatchStopServersRequestBody {
    private 'os-stop'?: BatchStopServersOption;
    public constructor(osStop?: BatchStopServersOption) { 
        this['os-stop'] = osStop;
    }
    public withOsStop(osStop: BatchStopServersOption): BatchStopServersRequestBody {
        this['os-stop'] = osStop;
        return this;
    }
    public set osStop(osStop: BatchStopServersOption  | undefined) {
        this['os-stop'] = osStop;
    }
    public get osStop(): BatchStopServersOption | undefined {
        return this['os-stop'];
    }
}