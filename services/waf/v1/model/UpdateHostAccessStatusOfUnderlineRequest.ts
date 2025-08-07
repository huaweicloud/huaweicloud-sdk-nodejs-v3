import { AccessStatusBody } from './AccessStatusBody';


export class UpdateHostAccessStatusOfUnderlineRequest {
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    public body?: AccessStatusBody;
    public constructor(contentType?: string, instanceId?: string) { 
        this['Content-Type'] = contentType;
        this['instance_id'] = instanceId;
    }
    public withContentType(contentType: string): UpdateHostAccessStatusOfUnderlineRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): UpdateHostAccessStatusOfUnderlineRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AccessStatusBody): UpdateHostAccessStatusOfUnderlineRequest {
        this['body'] = body;
        return this;
    }
}