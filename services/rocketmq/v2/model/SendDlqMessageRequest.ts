import { DeadletterResendReq } from './DeadletterResendReq';


export class SendDlqMessageRequest {
    public engine?: SendDlqMessageRequestEngineEnum | string;
    private 'instance_id'?: string;
    public body?: DeadletterResendReq;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: SendDlqMessageRequestEngineEnum | string): SendDlqMessageRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): SendDlqMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeadletterResendReq): SendDlqMessageRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SendDlqMessageRequestEngineEnum {
    RELIABILITY = 'reliability'
}
