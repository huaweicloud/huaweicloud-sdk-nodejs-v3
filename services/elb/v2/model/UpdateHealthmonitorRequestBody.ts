import { UpdateHealthmonitorReq } from './UpdateHealthmonitorReq';


export class UpdateHealthmonitorRequestBody {
    public healthmonitor?: UpdateHealthmonitorReq;
    public constructor(healthmonitor?: UpdateHealthmonitorReq) { 
        this['healthmonitor'] = healthmonitor;
    }
    public withHealthmonitor(healthmonitor: UpdateHealthmonitorReq): UpdateHealthmonitorRequestBody {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}