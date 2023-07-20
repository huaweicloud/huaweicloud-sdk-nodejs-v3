import { UpdateHealthMonitorOption } from './UpdateHealthMonitorOption';


export class UpdateHealthMonitorRequestBody {
    public healthmonitor?: UpdateHealthMonitorOption;
    public constructor(healthmonitor?: UpdateHealthMonitorOption) { 
        this['healthmonitor'] = healthmonitor;
    }
    public withHealthmonitor(healthmonitor: UpdateHealthMonitorOption): UpdateHealthMonitorRequestBody {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}