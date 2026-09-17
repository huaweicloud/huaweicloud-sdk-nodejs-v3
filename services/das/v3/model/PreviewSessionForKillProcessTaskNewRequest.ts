import { PreviewSessionForKillProcessTaskNewRequestBody } from './PreviewSessionForKillProcessTaskNewRequestBody';


export class PreviewSessionForKillProcessTaskNewRequest {
    private 'instance_id'?: string;
    public body?: PreviewSessionForKillProcessTaskNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): PreviewSessionForKillProcessTaskNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: PreviewSessionForKillProcessTaskNewRequestBody): PreviewSessionForKillProcessTaskNewRequest {
        this['body'] = body;
        return this;
    }
}