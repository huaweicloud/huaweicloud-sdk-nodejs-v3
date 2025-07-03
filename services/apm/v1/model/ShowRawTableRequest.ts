import { RawTableParam } from './RawTableParam';


export class ShowRawTableRequest {
    private 'x-business-id'?: number;
    public body?: RawTableParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ShowRawTableRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: RawTableParam): ShowRawTableRequest {
        this['body'] = body;
        return this;
    }
}