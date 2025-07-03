import { SumTableParam } from './SumTableParam';


export class ShowSumTableRequest {
    private 'x-business-id'?: number;
    public body?: SumTableParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ShowSumTableRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: SumTableParam): ShowSumTableRequest {
        this['body'] = body;
        return this;
    }
}