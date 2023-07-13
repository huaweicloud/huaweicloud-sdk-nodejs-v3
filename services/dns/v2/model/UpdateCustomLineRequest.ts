import { UpdateCustomsLineReq } from './UpdateCustomsLineReq';


export class UpdateCustomLineRequest {
    private 'line_id': string | undefined;
    public body?: UpdateCustomsLineReq;
    public constructor(lineId?: any) { 
        this['line_id'] = lineId;
    }
    public withLineId(lineId: string): UpdateCustomLineRequest {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId() {
        return this['line_id'];
    }
    public withBody(body: UpdateCustomsLineReq): UpdateCustomLineRequest {
        this['body'] = body;
        return this;
    }
}