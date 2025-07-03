import { TrendParam } from './TrendParam';


export class ShowTrendRequest {
    private 'x-business-id'?: number;
    public body?: TrendParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ShowTrendRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: TrendParam): ShowTrendRequest {
        this['body'] = body;
        return this;
    }
}