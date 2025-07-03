import { AppSearchParam } from './AppSearchParam';


export class SearchApplicationRequest {
    private 'x-business-id'?: number;
    public body?: AppSearchParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): SearchApplicationRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: AppSearchParam): SearchApplicationRequest {
        this['body'] = body;
        return this;
    }
}