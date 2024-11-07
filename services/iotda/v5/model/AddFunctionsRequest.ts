import { FunctionRequestDTO } from './FunctionRequestDTO';


export class AddFunctionsRequest {
    private 'Instance-Id'?: string;
    private 'Sp-Auth-Token'?: string;
    private 'Stage-Auth-Token'?: string;
    public body?: FunctionRequestDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddFunctionsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withSpAuthToken(spAuthToken: string): AddFunctionsRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string  | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken(): string | undefined {
        return this['Sp-Auth-Token'];
    }
    public withStageAuthToken(stageAuthToken: string): AddFunctionsRequest {
        this['Stage-Auth-Token'] = stageAuthToken;
        return this;
    }
    public set stageAuthToken(stageAuthToken: string  | undefined) {
        this['Stage-Auth-Token'] = stageAuthToken;
    }
    public get stageAuthToken(): string | undefined {
        return this['Stage-Auth-Token'];
    }
    public withBody(body: FunctionRequestDTO): AddFunctionsRequest {
        this['body'] = body;
        return this;
    }
}