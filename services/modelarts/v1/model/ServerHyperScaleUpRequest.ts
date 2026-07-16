import { EvsVolume } from './EvsVolume';
import { ServerDataVolume } from './ServerDataVolume';


export class ServerHyperScaleUpRequest {
    public flavor?: string;
    private 'root_volume'?: EvsVolume;
    private 'data_volume'?: ServerDataVolume;
    private 'image_id'?: string;
    public userdata?: string;
    private 'key_pair_name'?: string;
    public constructor(flavor?: string, imageId?: string) { 
        this['flavor'] = flavor;
        this['image_id'] = imageId;
    }
    public withFlavor(flavor: string): ServerHyperScaleUpRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withRootVolume(rootVolume: EvsVolume): ServerHyperScaleUpRequest {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: EvsVolume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): EvsVolume | undefined {
        return this['root_volume'];
    }
    public withDataVolume(dataVolume: ServerDataVolume): ServerHyperScaleUpRequest {
        this['data_volume'] = dataVolume;
        return this;
    }
    public set dataVolume(dataVolume: ServerDataVolume  | undefined) {
        this['data_volume'] = dataVolume;
    }
    public get dataVolume(): ServerDataVolume | undefined {
        return this['data_volume'];
    }
    public withImageId(imageId: string): ServerHyperScaleUpRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withUserdata(userdata: string): ServerHyperScaleUpRequest {
        this['userdata'] = userdata;
        return this;
    }
    public withKeyPairName(keyPairName: string): ServerHyperScaleUpRequest {
        this['key_pair_name'] = keyPairName;
        return this;
    }
    public set keyPairName(keyPairName: string  | undefined) {
        this['key_pair_name'] = keyPairName;
    }
    public get keyPairName(): string | undefined {
        return this['key_pair_name'];
    }
}