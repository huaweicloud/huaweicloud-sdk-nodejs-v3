import { FunctionRequestDTO } from './FunctionRequestDTO';


export class AddFunctionsRequest {
    private 'Instance-Id'?: string;
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
    public withBody(body: FunctionRequestDTO): AddFunctionsRequest {
        this['body'] = body;
        return this;
    }
}