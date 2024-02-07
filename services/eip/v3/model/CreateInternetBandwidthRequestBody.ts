import { CreateInternetBandwidthRequestBodyInternetBandwidth } from './CreateInternetBandwidthRequestBodyInternetBandwidth';


export class CreateInternetBandwidthRequestBody {
    private 'internet_bandwidth'?: CreateInternetBandwidthRequestBodyInternetBandwidth;
    public constructor(internetBandwidth?: CreateInternetBandwidthRequestBodyInternetBandwidth) { 
        this['internet_bandwidth'] = internetBandwidth;
    }
    public withInternetBandwidth(internetBandwidth: CreateInternetBandwidthRequestBodyInternetBandwidth): CreateInternetBandwidthRequestBody {
        this['internet_bandwidth'] = internetBandwidth;
        return this;
    }
    public set internetBandwidth(internetBandwidth: CreateInternetBandwidthRequestBodyInternetBandwidth  | undefined) {
        this['internet_bandwidth'] = internetBandwidth;
    }
    public get internetBandwidth(): CreateInternetBandwidthRequestBodyInternetBandwidth | undefined {
        return this['internet_bandwidth'];
    }
}