import { EnvTopoRequest } from './EnvTopoRequest';


export class SearchEnvTopologyRequest {
    private 'x-business-id'?: number;
    public body?: EnvTopoRequest;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): SearchEnvTopologyRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: EnvTopoRequest): SearchEnvTopologyRequest {
        this['body'] = body;
        return this;
    }
}