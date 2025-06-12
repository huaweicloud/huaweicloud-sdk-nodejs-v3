import { PlainSSLSwitchRep } from './PlainSSLSwitchRep';


export class ModifyInstanceSslConfigRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public body?: PlainSSLSwitchRep;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): ModifyInstanceSslConfigRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ModifyInstanceSslConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: PlainSSLSwitchRep): ModifyInstanceSslConfigRequest {
        this['body'] = body;
        return this;
    }
}