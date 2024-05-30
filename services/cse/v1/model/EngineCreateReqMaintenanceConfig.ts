

export class EngineCreateReqMaintenanceConfig {
    public time?: string;
    public zone?: string;
    public constructor() { 
    }
    public withTime(time: string): EngineCreateReqMaintenanceConfig {
        this['time'] = time;
        return this;
    }
    public withZone(zone: string): EngineCreateReqMaintenanceConfig {
        this['zone'] = zone;
        return this;
    }
}