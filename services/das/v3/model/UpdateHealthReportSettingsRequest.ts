import { UpdateHealthReportSettingsRequestBody } from './UpdateHealthReportSettingsRequestBody';


export class UpdateHealthReportSettingsRequest {
    private 'instance_id'?: string;
    public body?: UpdateHealthReportSettingsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateHealthReportSettingsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateHealthReportSettingsRequestBody): UpdateHealthReportSettingsRequest {
        this['body'] = body;
        return this;
    }
}