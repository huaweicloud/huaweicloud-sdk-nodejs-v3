import { ResetBridgeSecret } from './ResetBridgeSecret';


export class ResetBridgeSecretRequest {
    private 'Instance-Id'?: string;
    private 'bridge_id'?: string;
    public body?: ResetBridgeSecret;
    public constructor(bridgeId?: string) { 
        this['bridge_id'] = bridgeId;
    }
    public withInstanceId(instanceId: string): ResetBridgeSecretRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBridgeId(bridgeId: string): ResetBridgeSecretRequest {
        this['bridge_id'] = bridgeId;
        return this;
    }
    public set bridgeId(bridgeId: string  | undefined) {
        this['bridge_id'] = bridgeId;
    }
    public get bridgeId(): string | undefined {
        return this['bridge_id'];
    }
    public withBody(body: ResetBridgeSecret): ResetBridgeSecretRequest {
        this['body'] = body;
        return this;
    }
}