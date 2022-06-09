import { UpdateHealthMonitorRequestBody } from './UpdateHealthMonitorRequestBody';


export class UpdateHealthMonitorRequest {
    private 'healthmonitor_id': string | undefined;
    public body?: UpdateHealthMonitorRequestBody;
    public constructor(healthmonitorId?: any) { 
        this['healthmonitor_id'] = healthmonitorId;
    }
    public withHealthmonitorId(healthmonitorId: string): UpdateHealthMonitorRequest {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: string | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId() {
        return this['healthmonitor_id'];
    }
    public withBody(body: UpdateHealthMonitorRequestBody): UpdateHealthMonitorRequest {
        this['body'] = body;
        return this;
    }
}