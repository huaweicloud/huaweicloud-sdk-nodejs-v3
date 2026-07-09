import { UpdateLogRetention } from './UpdateLogRetention';


export class UpdateLogRetentionCommonSettingsRequest {
    private 'instance_id'?: string;
    public body?: UpdateLogRetention;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateLogRetentionCommonSettingsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateLogRetention): UpdateLogRetentionCommonSettingsRequest {
        this['body'] = body;
        return this;
    }
}