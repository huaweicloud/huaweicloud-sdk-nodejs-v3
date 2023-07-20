import { CreateHealthmonitorReq } from './CreateHealthmonitorReq';


export class CreateHealthmonitorRequestBody {
    public healthmonitor?: CreateHealthmonitorReq;
    public constructor(healthmonitor?: CreateHealthmonitorReq) { 
        this['healthmonitor'] = healthmonitor;
    }
    public withHealthmonitor(healthmonitor: CreateHealthmonitorReq): CreateHealthmonitorRequestBody {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}