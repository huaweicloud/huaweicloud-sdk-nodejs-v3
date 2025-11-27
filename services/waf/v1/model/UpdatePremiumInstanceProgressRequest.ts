import { AccessProgress } from './AccessProgress';


export class UpdatePremiumInstanceProgressRequest {
    private 'Content-Type'?: string;
    private 'host_id'?: string;
    public body?: AccessProgress;
    public constructor(contentType?: string, hostId?: string) { 
        this['Content-Type'] = contentType;
        this['host_id'] = hostId;
    }
    public withContentType(contentType: string): UpdatePremiumInstanceProgressRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withHostId(hostId: string): UpdatePremiumInstanceProgressRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: AccessProgress): UpdatePremiumInstanceProgressRequest {
        this['body'] = body;
        return this;
    }
}