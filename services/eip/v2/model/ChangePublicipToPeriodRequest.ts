import { ChangeToPeriodReq } from './ChangeToPeriodReq';


export class ChangePublicipToPeriodRequest {
    public body?: ChangeToPeriodReq;
    public constructor() { 
    }
    public withBody(body: ChangeToPeriodReq): ChangePublicipToPeriodRequest {
        this['body'] = body;
        return this;
    }
}