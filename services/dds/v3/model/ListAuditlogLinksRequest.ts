import { ProduceAuditlogLinksRequestBody } from './ProduceAuditlogLinksRequestBody';


export class ListAuditlogLinksRequest {
    private 'instance_id'?: string;
    public body?: ProduceAuditlogLinksRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditlogLinksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ProduceAuditlogLinksRequestBody): ListAuditlogLinksRequest {
        this['body'] = body;
        return this;
    }
}