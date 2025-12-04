import { CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth } from './CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth';


export class CreateCloudPhoneSingleServerRequestBodyPublicIp {
    public ids?: Array<string>;
    public type?: string;
    public count?: number;
    private 'band_width'?: CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth;
    public constructor(bandWidth?: CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth) { 
        this['band_width'] = bandWidth;
    }
    public withIds(ids: Array<string>): CreateCloudPhoneSingleServerRequestBodyPublicIp {
        this['ids'] = ids;
        return this;
    }
    public withType(type: string): CreateCloudPhoneSingleServerRequestBodyPublicIp {
        this['type'] = type;
        return this;
    }
    public withCount(count: number): CreateCloudPhoneSingleServerRequestBodyPublicIp {
        this['count'] = count;
        return this;
    }
    public withBandWidth(bandWidth: CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth): CreateCloudPhoneSingleServerRequestBodyPublicIp {
        this['band_width'] = bandWidth;
        return this;
    }
    public set bandWidth(bandWidth: CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth  | undefined) {
        this['band_width'] = bandWidth;
    }
    public get bandWidth(): CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth | undefined {
        return this['band_width'];
    }
}