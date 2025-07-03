import { FlameLineTreeInfo } from './FlameLineTreeInfo';


export class ShowFlameLineTreeRequest {
    private 'x-business-id'?: number;
    public body?: FlameLineTreeInfo;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ShowFlameLineTreeRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: FlameLineTreeInfo): ShowFlameLineTreeRequest {
        this['body'] = body;
        return this;
    }
}