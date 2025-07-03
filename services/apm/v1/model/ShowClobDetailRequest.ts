import { GetClobDetailParam } from './GetClobDetailParam';


export class ShowClobDetailRequest {
    private 'x-business-id'?: number;
    public body?: GetClobDetailParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ShowClobDetailRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: GetClobDetailParam): ShowClobDetailRequest {
        this['body'] = body;
        return this;
    }
}