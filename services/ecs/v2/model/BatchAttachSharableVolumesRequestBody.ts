import { BatchAttachSharableVolumesOption } from './BatchAttachSharableVolumesOption';


export class BatchAttachSharableVolumesRequestBody {
    public serverinfo: Array<BatchAttachSharableVolumesOption>;
    public constructor(serverinfo?: any) { 
        this['serverinfo'] = serverinfo;
    }
    public withServerinfo(serverinfo: Array<BatchAttachSharableVolumesOption>): BatchAttachSharableVolumesRequestBody {
        this['serverinfo'] = serverinfo;
        return this;
    }
}