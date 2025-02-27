import { ChangeGateway } from './ChangeGateway';


export class ChangeGatewayRequest {
    private 'Instance-Id'?: string;
    private 'device_id'?: string;
    public body?: ChangeGateway;
    public constructor(deviceId?: string) { 
        this['device_id'] = deviceId;
    }
    public withInstanceId(instanceId: string): ChangeGatewayRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withDeviceId(deviceId: string): ChangeGatewayRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withBody(body: ChangeGateway): ChangeGatewayRequest {
        this['body'] = body;
        return this;
    }
}