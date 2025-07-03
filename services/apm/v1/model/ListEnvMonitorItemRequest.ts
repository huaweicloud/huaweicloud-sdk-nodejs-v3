import { GetEnvMonitorItemListParam } from './GetEnvMonitorItemListParam';


export class ListEnvMonitorItemRequest {
    private 'x-business-id'?: number;
    public body?: GetEnvMonitorItemListParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ListEnvMonitorItemRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: GetEnvMonitorItemListParam): ListEnvMonitorItemRequest {
        this['body'] = body;
        return this;
    }
}