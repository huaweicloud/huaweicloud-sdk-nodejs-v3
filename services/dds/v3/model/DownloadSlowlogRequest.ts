import { DownloadSlowlogRequestBody } from './DownloadSlowlogRequestBody';


export class DownloadSlowlogRequest {
    private 'instance_id'?: string;
    public body?: DownloadSlowlogRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DownloadSlowlogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DownloadSlowlogRequestBody): DownloadSlowlogRequest {
        this['body'] = body;
        return this;
    }
}