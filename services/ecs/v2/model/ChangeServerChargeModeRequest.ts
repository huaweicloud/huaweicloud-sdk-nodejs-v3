import { ChangeServerChargeModeRequestBody } from './ChangeServerChargeModeRequestBody';


export class ChangeServerChargeModeRequest {
    public body?: ChangeServerChargeModeRequestBody;
    public constructor() { 
    }
    public withBody(body: ChangeServerChargeModeRequestBody): ChangeServerChargeModeRequest {
        this['body'] = body;
        return this;
    }
}