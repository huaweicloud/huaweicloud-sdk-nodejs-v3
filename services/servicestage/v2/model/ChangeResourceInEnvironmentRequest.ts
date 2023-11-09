import { EnvironmentResourceModify } from './EnvironmentResourceModify';


export class ChangeResourceInEnvironmentRequest {
    private 'environment_id'?: string;
    public body?: EnvironmentResourceModify;
    public constructor(environmentId?: string) { 
        this['environment_id'] = environmentId;
    }
    public withEnvironmentId(environmentId: string): ChangeResourceInEnvironmentRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withBody(body: EnvironmentResourceModify): ChangeResourceInEnvironmentRequest {
        this['body'] = body;
        return this;
    }
}