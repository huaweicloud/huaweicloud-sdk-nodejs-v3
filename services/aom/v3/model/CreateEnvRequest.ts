import { EnvParam } from './EnvParam';


export class CreateEnvRequest {
    public body?: EnvParam;
    public constructor() { 
    }
    public withBody(body: EnvParam): CreateEnvRequest {
        this['body'] = body;
        return this;
    }
}