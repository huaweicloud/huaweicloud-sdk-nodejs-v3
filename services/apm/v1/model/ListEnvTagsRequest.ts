import { TagParam } from './TagParam';


export class ListEnvTagsRequest {
    private 'x-business-id'?: number;
    public body?: TagParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ListEnvTagsRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: TagParam): ListEnvTagsRequest {
        this['body'] = body;
        return this;
    }
}