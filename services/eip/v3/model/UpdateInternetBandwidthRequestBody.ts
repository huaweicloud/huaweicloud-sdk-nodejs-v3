import { UpdateInternetBandwidthRequestBodyInternetBandwidth } from './UpdateInternetBandwidthRequestBodyInternetBandwidth';


export class UpdateInternetBandwidthRequestBody {
    private 'internet_bandwidth'?: UpdateInternetBandwidthRequestBodyInternetBandwidth;
    public constructor(internetBandwidth?: UpdateInternetBandwidthRequestBodyInternetBandwidth) { 
        this['internet_bandwidth'] = internetBandwidth;
    }
    public withInternetBandwidth(internetBandwidth: UpdateInternetBandwidthRequestBodyInternetBandwidth): UpdateInternetBandwidthRequestBody {
        this['internet_bandwidth'] = internetBandwidth;
        return this;
    }
    public set internetBandwidth(internetBandwidth: UpdateInternetBandwidthRequestBodyInternetBandwidth  | undefined) {
        this['internet_bandwidth'] = internetBandwidth;
    }
    public get internetBandwidth(): UpdateInternetBandwidthRequestBodyInternetBandwidth | undefined {
        return this['internet_bandwidth'];
    }
}