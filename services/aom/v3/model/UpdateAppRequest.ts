import { BizAppParam } from './BizAppParam';


export class UpdateAppRequest {
    private 'application_id'?: string;
    public body?: BizAppParam;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): UpdateAppRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: BizAppParam): UpdateAppRequest {
        this['body'] = body;
        return this;
    }
}