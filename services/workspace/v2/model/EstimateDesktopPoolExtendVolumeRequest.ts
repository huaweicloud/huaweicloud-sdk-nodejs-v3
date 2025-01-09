import { EstimateExtendVolumeRequestBody } from './EstimateExtendVolumeRequestBody';


export class EstimateDesktopPoolExtendVolumeRequest {
    public body?: EstimateExtendVolumeRequestBody;
    public constructor() { 
    }
    public withBody(body: EstimateExtendVolumeRequestBody): EstimateDesktopPoolExtendVolumeRequest {
        this['body'] = body;
        return this;
    }
}