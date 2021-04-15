import { RemovePublicipsFromSharedBandwidthRequestBody } from './RemovePublicipsFromSharedBandwidthRequestBody';


export class RemovePublicipsFromSharedBandwidthRequest {
    private 'bandwidth_id': string | undefined;
    public body?: RemovePublicipsFromSharedBandwidthRequestBody;
    public constructor(bandwidthId?: any) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): RemovePublicipsFromSharedBandwidthRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId() {
        return this['bandwidth_id'];
    }
    public withBody(body: RemovePublicipsFromSharedBandwidthRequestBody): RemovePublicipsFromSharedBandwidthRequest {
        this['body'] = body;
        return this;
    }
}