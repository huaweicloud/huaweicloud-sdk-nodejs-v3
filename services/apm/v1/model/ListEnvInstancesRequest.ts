import { InstanceSearchParam } from './InstanceSearchParam';


export class ListEnvInstancesRequest {
    private 'x-business-id'?: number;
    public body?: InstanceSearchParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ListEnvInstancesRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: InstanceSearchParam): ListEnvInstancesRequest {
        this['body'] = body;
        return this;
    }
}