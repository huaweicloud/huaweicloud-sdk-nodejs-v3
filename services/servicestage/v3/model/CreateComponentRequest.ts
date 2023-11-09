import { ComponentCreate } from './ComponentCreate';


export class CreateComponentRequest {
    private 'application_id'?: string;
    public body?: ComponentCreate;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): CreateComponentRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: ComponentCreate): CreateComponentRequest {
        this['body'] = body;
        return this;
    }
}