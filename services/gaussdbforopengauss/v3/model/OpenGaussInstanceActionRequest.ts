import { OpenGaussEnlargeVolume } from './OpenGaussEnlargeVolume';
import { OpenGaussExpandCluster } from './OpenGaussExpandCluster';


export class OpenGaussInstanceActionRequest {
    private 'expand_cluster'?: OpenGaussExpandCluster;
    private 'enlarge_volume'?: OpenGaussEnlargeVolume;
    private 'is_auto_pay'?: string;
    public constructor() { 
    }
    public withExpandCluster(expandCluster: OpenGaussExpandCluster): OpenGaussInstanceActionRequest {
        this['expand_cluster'] = expandCluster;
        return this;
    }
    public set expandCluster(expandCluster: OpenGaussExpandCluster  | undefined) {
        this['expand_cluster'] = expandCluster;
    }
    public get expandCluster(): OpenGaussExpandCluster | undefined {
        return this['expand_cluster'];
    }
    public withEnlargeVolume(enlargeVolume: OpenGaussEnlargeVolume): OpenGaussInstanceActionRequest {
        this['enlarge_volume'] = enlargeVolume;
        return this;
    }
    public set enlargeVolume(enlargeVolume: OpenGaussEnlargeVolume  | undefined) {
        this['enlarge_volume'] = enlargeVolume;
    }
    public get enlargeVolume(): OpenGaussEnlargeVolume | undefined {
        return this['enlarge_volume'];
    }
    public withIsAutoPay(isAutoPay: string): OpenGaussInstanceActionRequest {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): string | undefined {
        return this['is_auto_pay'];
    }
}