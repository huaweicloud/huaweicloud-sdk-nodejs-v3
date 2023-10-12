import { UpdateTrafficMirrorFilterOption } from './UpdateTrafficMirrorFilterOption';


export class UpdateTrafficMirrorFilterRequestBody {
    private 'traffic_mirror_filter'?: UpdateTrafficMirrorFilterOption;
    public constructor(trafficMirrorFilter?: UpdateTrafficMirrorFilterOption) { 
        this['traffic_mirror_filter'] = trafficMirrorFilter;
    }
    public withTrafficMirrorFilter(trafficMirrorFilter: UpdateTrafficMirrorFilterOption): UpdateTrafficMirrorFilterRequestBody {
        this['traffic_mirror_filter'] = trafficMirrorFilter;
        return this;
    }
    public set trafficMirrorFilter(trafficMirrorFilter: UpdateTrafficMirrorFilterOption  | undefined) {
        this['traffic_mirror_filter'] = trafficMirrorFilter;
    }
    public get trafficMirrorFilter(): UpdateTrafficMirrorFilterOption | undefined {
        return this['traffic_mirror_filter'];
    }
}