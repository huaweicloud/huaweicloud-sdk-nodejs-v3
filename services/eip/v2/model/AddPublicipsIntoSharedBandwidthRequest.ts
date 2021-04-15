import { AddPublicipsIntoSharedBandwidthRequestBody } from './AddPublicipsIntoSharedBandwidthRequestBody';


export class AddPublicipsIntoSharedBandwidthRequest {
    private 'bandwidth_id': string | undefined;
    public body?: AddPublicipsIntoSharedBandwidthRequestBody;
    public constructor(bandwidthId?: any) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): AddPublicipsIntoSharedBandwidthRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId() {
        return this['bandwidth_id'];
    }
    public withBody(body: AddPublicipsIntoSharedBandwidthRequestBody): AddPublicipsIntoSharedBandwidthRequest {
        this['body'] = body;
        return this;
    }
}