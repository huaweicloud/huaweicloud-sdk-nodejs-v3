import { SetChargeModesBody } from './SetChargeModesBody';


export class SetChargeModesRequest {
    public body?: SetChargeModesBody;
    public constructor() { 
    }
    public withBody(body: SetChargeModesBody): SetChargeModesRequest {
        this['body'] = body;
        return this;
    }
}