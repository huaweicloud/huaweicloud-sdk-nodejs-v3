import { ReqUpdateDeh } from './ReqUpdateDeh';


export class UpdateDedicatedHostRequest {
    private 'dedicated_host_id'?: string;
    public body?: ReqUpdateDeh;
    public constructor(dedicatedHostId?: string) { 
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public withDedicatedHostId(dedicatedHostId: string): UpdateDedicatedHostRequest {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withBody(body: ReqUpdateDeh): UpdateDedicatedHostRequest {
        this['body'] = body;
        return this;
    }
}