import { ApplicationConfigModify } from './ApplicationConfigModify';


export class ModifyApplicationConfigurationRequest {
    private 'application_id'?: string;
    public body?: ApplicationConfigModify;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): ModifyApplicationConfigurationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: ApplicationConfigModify): ModifyApplicationConfigurationRequest {
        this['body'] = body;
        return this;
    }
}