

export class DeleteHealthMonitorRequest {
    private 'healthmonitor_id': string | undefined;
    public constructor(healthmonitorId?: any) { 
        this['healthmonitor_id'] = healthmonitorId;
    }
    public withHealthmonitorId(healthmonitorId: string): DeleteHealthMonitorRequest {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: string | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId() {
        return this['healthmonitor_id'];
    }
}