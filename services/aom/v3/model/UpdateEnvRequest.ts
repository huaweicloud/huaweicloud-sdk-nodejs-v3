import { EnvParam } from './EnvParam';


export class UpdateEnvRequest {
    private 'environment_id'?: string;
    public body?: EnvParam;
    public constructor(environmentId?: string) { 
        this['environment_id'] = environmentId;
    }
    public withEnvironmentId(environmentId: string): UpdateEnvRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withBody(body: EnvParam): UpdateEnvRequest {
        this['body'] = body;
        return this;
    }
}