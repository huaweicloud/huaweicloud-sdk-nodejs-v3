import { ExportDlqMessageReq } from './ExportDlqMessageReq';


export class ExportDlqMessageRequest {
    private 'instance_id'?: string;
    public body?: ExportDlqMessageReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExportDlqMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ExportDlqMessageReq): ExportDlqMessageRequest {
        this['body'] = body;
        return this;
    }
}