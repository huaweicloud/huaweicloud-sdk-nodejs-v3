import { CreateTrafficMirrorFilterOption } from './CreateTrafficMirrorFilterOption';


export class CreateTrafficMirrorFilterRequestBody {
    private 'traffic_mirror_filter'?: CreateTrafficMirrorFilterOption;
    public constructor(trafficMirrorFilter?: CreateTrafficMirrorFilterOption) { 
        this['traffic_mirror_filter'] = trafficMirrorFilter;
    }
    public withTrafficMirrorFilter(trafficMirrorFilter: CreateTrafficMirrorFilterOption): CreateTrafficMirrorFilterRequestBody {
        this['traffic_mirror_filter'] = trafficMirrorFilter;
        return this;
    }
    public set trafficMirrorFilter(trafficMirrorFilter: CreateTrafficMirrorFilterOption  | undefined) {
        this['traffic_mirror_filter'] = trafficMirrorFilter;
    }
    public get trafficMirrorFilter(): CreateTrafficMirrorFilterOption | undefined {
        return this['traffic_mirror_filter'];
    }
}