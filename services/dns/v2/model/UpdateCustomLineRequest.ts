import { UpdateCustomLineRequestBody } from './UpdateCustomLineRequestBody';


export class UpdateCustomLineRequest {
    private 'line_id'?: string;
    public body?: UpdateCustomLineRequestBody;
    public constructor(lineId?: string) { 
        this['line_id'] = lineId;
    }
    public withLineId(lineId: string): UpdateCustomLineRequest {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
        return this['line_id'];
    }
    public withBody(body: UpdateCustomLineRequestBody): UpdateCustomLineRequest {
        this['body'] = body;
        return this;
    }
}