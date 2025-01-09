import { EstimateAddVolumeRequestBody } from './EstimateAddVolumeRequestBody';


export class EstimateDesktopPoolAddVolumeRequest {
    public body?: EstimateAddVolumeRequestBody;
    public constructor() { 
    }
    public withBody(body: EstimateAddVolumeRequestBody): EstimateDesktopPoolAddVolumeRequest {
        this['body'] = body;
        return this;
    }
}