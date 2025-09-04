import { AddSecurityProfileDTO } from './AddSecurityProfileDTO';


export class CreateSecurityProfileRequest {
    private 'Instance-Id'?: string;
    public body?: AddSecurityProfileDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateSecurityProfileRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddSecurityProfileDTO): CreateSecurityProfileRequest {
        this['body'] = body;
        return this;
    }
}