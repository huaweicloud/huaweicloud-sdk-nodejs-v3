import { ChangeVolumeChargeModeRequestBody } from './ChangeVolumeChargeModeRequestBody';


export class ChangeVolumeChargeModeRequest {
    public body?: ChangeVolumeChargeModeRequestBody;
    public constructor() { 
    }
    public withBody(body: ChangeVolumeChargeModeRequestBody): ChangeVolumeChargeModeRequest {
        this['body'] = body;
        return this;
    }
}