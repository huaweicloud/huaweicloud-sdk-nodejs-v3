import { BatchCreateInternetBandwidthRequestBodyInternetBandwidth } from './BatchCreateInternetBandwidthRequestBodyInternetBandwidth';


export class BatchCreateInternetBandwidthRequestBody {
    private 'internet_bandwidth'?: BatchCreateInternetBandwidthRequestBodyInternetBandwidth;
    public constructor(internetBandwidth?: BatchCreateInternetBandwidthRequestBodyInternetBandwidth) { 
        this['internet_bandwidth'] = internetBandwidth;
    }
    public withInternetBandwidth(internetBandwidth: BatchCreateInternetBandwidthRequestBodyInternetBandwidth): BatchCreateInternetBandwidthRequestBody {
        this['internet_bandwidth'] = internetBandwidth;
        return this;
    }
    public set internetBandwidth(internetBandwidth: BatchCreateInternetBandwidthRequestBodyInternetBandwidth  | undefined) {
        this['internet_bandwidth'] = internetBandwidth;
    }
    public get internetBandwidth(): BatchCreateInternetBandwidthRequestBodyInternetBandwidth | undefined {
        return this['internet_bandwidth'];
    }
}