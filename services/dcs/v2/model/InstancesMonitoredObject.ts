

export class InstancesMonitoredObject {
    private 'dcs_instance_id'?: string | undefined;
    public name?: string;
    public status?: string;
    public constructor() { 
    }
    public withDcsInstanceId(dcsInstanceId: string): InstancesMonitoredObject {
        this['dcs_instance_id'] = dcsInstanceId;
        return this;
    }
    public set dcsInstanceId(dcsInstanceId: string | undefined) {
        this['dcs_instance_id'] = dcsInstanceId;
    }
    public get dcsInstanceId() {
        return this['dcs_instance_id'];
    }
    public withName(name: string): InstancesMonitoredObject {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): InstancesMonitoredObject {
        this['status'] = status;
        return this;
    }
}