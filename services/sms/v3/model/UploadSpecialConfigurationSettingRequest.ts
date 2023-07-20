import { ConfigurationRequestBody } from './ConfigurationRequestBody';


export class UploadSpecialConfigurationSettingRequest {
    private 'task_id'?: string;
    public body?: ConfigurationRequestBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UploadSpecialConfigurationSettingRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: ConfigurationRequestBody): UploadSpecialConfigurationSettingRequest {
        this['body'] = body;
        return this;
    }
}