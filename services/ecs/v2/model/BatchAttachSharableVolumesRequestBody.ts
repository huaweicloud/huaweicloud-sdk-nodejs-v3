import { BatchAttachSharableVolumesOption } from './BatchAttachSharableVolumesOption';


export class BatchAttachSharableVolumesRequestBody {
    public serverinfo?: Array<BatchAttachSharableVolumesOption>;
    public constructor(serverinfo?: Array<BatchAttachSharableVolumesOption>) { 
        this['serverinfo'] = serverinfo;
    }
    public withServerinfo(serverinfo: Array<BatchAttachSharableVolumesOption>): BatchAttachSharableVolumesRequestBody {
        this['serverinfo'] = serverinfo;
        return this;
    }
}