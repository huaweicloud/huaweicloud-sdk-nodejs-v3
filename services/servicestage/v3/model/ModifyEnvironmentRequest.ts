import { EnvironmentModify } from './EnvironmentModify';


export class ModifyEnvironmentRequest {
    private 'environment_id'?: string;
    public body?: EnvironmentModify;
    public constructor(environmentId?: string) { 
        this['environment_id'] = environmentId;
    }
    public withEnvironmentId(environmentId: string): ModifyEnvironmentRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withBody(body: EnvironmentModify): ModifyEnvironmentRequest {
        this['body'] = body;
        return this;
    }
}