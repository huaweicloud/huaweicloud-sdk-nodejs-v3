import { TraceSearchParam } from './TraceSearchParam';


export class ShowSpanSearchRequest {
    private 'x-business-id'?: number;
    public body?: TraceSearchParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ShowSpanSearchRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: TraceSearchParam): ShowSpanSearchRequest {
        this['body'] = body;
        return this;
    }
}