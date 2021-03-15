import { AddApplication } from './AddApplication';


export class AddApplicationRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: AddApplication;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddApplicationRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: AddApplication): AddApplicationRequest {
        this['body'] = body;
        return this;
    }
}