import { UpdateInternetBandwidthRequestBody } from './UpdateInternetBandwidthRequestBody';


export class UpdateInternetBandwidthRequest {
    private 'internet_bandwidth_id'?: string;
    public body?: UpdateInternetBandwidthRequestBody;
    public constructor(internetBandwidthId?: string) { 
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public withInternetBandwidthId(internetBandwidthId: string): UpdateInternetBandwidthRequest {
        this['internet_bandwidth_id'] = internetBandwidthId;
        return this;
    }
    public set internetBandwidthId(internetBandwidthId: string  | undefined) {
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public get internetBandwidthId(): string | undefined {
        return this['internet_bandwidth_id'];
    }
    public withBody(body: UpdateInternetBandwidthRequestBody): UpdateInternetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}