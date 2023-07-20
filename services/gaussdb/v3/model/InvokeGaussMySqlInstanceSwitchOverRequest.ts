import { TaurusSwitchoverRequest } from './TaurusSwitchoverRequest';


export class InvokeGaussMySqlInstanceSwitchOverRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public body?: TaurusSwitchoverRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): InvokeGaussMySqlInstanceSwitchOverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): InvokeGaussMySqlInstanceSwitchOverRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: TaurusSwitchoverRequest): InvokeGaussMySqlInstanceSwitchOverRequest {
        this['body'] = body;
        return this;
    }
}