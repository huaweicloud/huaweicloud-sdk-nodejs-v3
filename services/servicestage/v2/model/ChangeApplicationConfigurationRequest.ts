import { ApplicationConfigModify } from './ApplicationConfigModify';


export class ChangeApplicationConfigurationRequest {
    private 'application_id'?: string;
    public body?: ApplicationConfigModify;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): ChangeApplicationConfigurationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: ApplicationConfigModify): ChangeApplicationConfigurationRequest {
        this['body'] = body;
        return this;
    }
}