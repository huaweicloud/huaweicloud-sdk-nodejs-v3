import { BusinessEnvRequest } from './BusinessEnvRequest';


export class ListBusinessEnvRequest {
    private 'x-business-id'?: number;
    public body?: BusinessEnvRequest;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ListBusinessEnvRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: BusinessEnvRequest): ListBusinessEnvRequest {
        this['body'] = body;
        return this;
    }
}