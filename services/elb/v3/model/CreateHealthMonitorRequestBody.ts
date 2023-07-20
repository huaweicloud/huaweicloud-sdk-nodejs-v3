import { CreateHealthMonitorOption } from './CreateHealthMonitorOption';


export class CreateHealthMonitorRequestBody {
    public healthmonitor?: CreateHealthMonitorOption;
    public constructor(healthmonitor?: CreateHealthMonitorOption) { 
        this['healthmonitor'] = healthmonitor;
    }
    public withHealthmonitor(healthmonitor: CreateHealthMonitorOption): CreateHealthMonitorRequestBody {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}