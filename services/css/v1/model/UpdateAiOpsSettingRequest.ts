import { AiOpsSetting } from './AiOpsSetting';


export class UpdateAiOpsSettingRequest {
    private 'cluster_id'?: string;
    public body?: AiOpsSetting;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateAiOpsSettingRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AiOpsSetting): UpdateAiOpsSettingRequest {
        this['body'] = body;
        return this;
    }
}