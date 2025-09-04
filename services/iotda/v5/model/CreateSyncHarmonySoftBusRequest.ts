

export class CreateSyncHarmonySoftBusRequest {
    private 'Instance-Id'?: string;
    private 'bus_id'?: string;
    public constructor(busId?: string) { 
        this['bus_id'] = busId;
    }
    public withInstanceId(instanceId: string): CreateSyncHarmonySoftBusRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBusId(busId: string): CreateSyncHarmonySoftBusRequest {
        this['bus_id'] = busId;
        return this;
    }
    public set busId(busId: string  | undefined) {
        this['bus_id'] = busId;
    }
    public get busId(): string | undefined {
        return this['bus_id'];
    }
}