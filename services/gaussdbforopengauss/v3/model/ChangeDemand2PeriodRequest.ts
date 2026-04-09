import { ModifyDBPayTypeRequestBody } from './ModifyDBPayTypeRequestBody';


export class ChangeDemand2PeriodRequest {
    public body?: ModifyDBPayTypeRequestBody;
    public constructor() { 
    }
    public withBody(body: ModifyDBPayTypeRequestBody): ChangeDemand2PeriodRequest {
        this['body'] = body;
        return this;
    }
}