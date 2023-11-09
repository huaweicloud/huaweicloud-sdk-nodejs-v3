import { ApplicationModify } from './ApplicationModify';


export class ModifyApplicationRequest {
    private 'application_id'?: string;
    public body?: ApplicationModify;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): ModifyApplicationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: ApplicationModify): ModifyApplicationRequest {
        this['body'] = body;
        return this;
    }
}