

export class QueryDcDeviceRespDTO {
    private 'device_id'?: string;
    public constructor() { 
    }
    public withDeviceId(deviceId: string): QueryDcDeviceRespDTO {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
}