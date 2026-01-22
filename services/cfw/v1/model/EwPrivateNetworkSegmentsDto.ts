import { PrivateNetworkSegmentVO } from './PrivateNetworkSegmentVO';


export class EwPrivateNetworkSegmentsDto {
    private 'private_network_segments'?: Array<PrivateNetworkSegmentVO>;
    public constructor(privateNetworkSegments?: Array<PrivateNetworkSegmentVO>) { 
        this['private_network_segments'] = privateNetworkSegments;
    }
    public withPrivateNetworkSegments(privateNetworkSegments: Array<PrivateNetworkSegmentVO>): EwPrivateNetworkSegmentsDto {
        this['private_network_segments'] = privateNetworkSegments;
        return this;
    }
    public set privateNetworkSegments(privateNetworkSegments: Array<PrivateNetworkSegmentVO>  | undefined) {
        this['private_network_segments'] = privateNetworkSegments;
    }
    public get privateNetworkSegments(): Array<PrivateNetworkSegmentVO> | undefined {
        return this['private_network_segments'];
    }
}