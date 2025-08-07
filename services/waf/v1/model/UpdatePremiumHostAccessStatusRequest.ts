import { UpdatePremiumHostAccessStatusRequestBody } from './UpdatePremiumHostAccessStatusRequestBody';


export class UpdatePremiumHostAccessStatusRequest {
    private 'host_id'?: string;
    public body?: UpdatePremiumHostAccessStatusRequestBody;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withHostId(hostId: string): UpdatePremiumHostAccessStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: UpdatePremiumHostAccessStatusRequestBody): UpdatePremiumHostAccessStatusRequest {
        this['body'] = body;
        return this;
    }
}