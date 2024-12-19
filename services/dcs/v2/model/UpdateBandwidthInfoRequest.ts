import { UpdateGroupBandwidthInfoRequest } from './UpdateGroupBandwidthInfoRequest';


export class UpdateBandwidthInfoRequest {
    private 'group_bandwidths'?: Array<UpdateGroupBandwidthInfoRequest>;
    public constructor() { 
    }
    public withGroupBandwidths(groupBandwidths: Array<UpdateGroupBandwidthInfoRequest>): UpdateBandwidthInfoRequest {
        this['group_bandwidths'] = groupBandwidths;
        return this;
    }
    public set groupBandwidths(groupBandwidths: Array<UpdateGroupBandwidthInfoRequest>  | undefined) {
        this['group_bandwidths'] = groupBandwidths;
    }
    public get groupBandwidths(): Array<UpdateGroupBandwidthInfoRequest> | undefined {
        return this['group_bandwidths'];
    }
}