import { CreateClusterPublicEipSize } from './CreateClusterPublicEipSize';


export class CreateClusterPublicEip {
    public bandWidth?: CreateClusterPublicEipSize;
    public constructor(bandWidth?: CreateClusterPublicEipSize) { 
        this['bandWidth'] = bandWidth;
    }
    public withBandWidth(bandWidth: CreateClusterPublicEipSize): CreateClusterPublicEip {
        this['bandWidth'] = bandWidth;
        return this;
    }
}