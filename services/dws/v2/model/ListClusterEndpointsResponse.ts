import { PrivateEndpointResponse } from './PrivateEndpointResponse';
import { PublicEndpointResponse } from './PublicEndpointResponse';
import { PublicIpInfoResponse } from './PublicIpInfoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterEndpointsResponse extends SdkResponse {
    private 'public_endpoints'?: PublicEndpointResponse;
    private 'private_endpoints'?: PrivateEndpointResponse;
    private 'public_ip_infos'?: Array<PublicIpInfoResponse>;
    public constructor() { 
        super();
    }
    public withPublicEndpoints(publicEndpoints: PublicEndpointResponse): ListClusterEndpointsResponse {
        this['public_endpoints'] = publicEndpoints;
        return this;
    }
    public set publicEndpoints(publicEndpoints: PublicEndpointResponse  | undefined) {
        this['public_endpoints'] = publicEndpoints;
    }
    public get publicEndpoints(): PublicEndpointResponse | undefined {
        return this['public_endpoints'];
    }
    public withPrivateEndpoints(privateEndpoints: PrivateEndpointResponse): ListClusterEndpointsResponse {
        this['private_endpoints'] = privateEndpoints;
        return this;
    }
    public set privateEndpoints(privateEndpoints: PrivateEndpointResponse  | undefined) {
        this['private_endpoints'] = privateEndpoints;
    }
    public get privateEndpoints(): PrivateEndpointResponse | undefined {
        return this['private_endpoints'];
    }
    public withPublicIpInfos(publicIpInfos: Array<PublicIpInfoResponse>): ListClusterEndpointsResponse {
        this['public_ip_infos'] = publicIpInfos;
        return this;
    }
    public set publicIpInfos(publicIpInfos: Array<PublicIpInfoResponse>  | undefined) {
        this['public_ip_infos'] = publicIpInfos;
    }
    public get publicIpInfos(): Array<PublicIpInfoResponse> | undefined {
        return this['public_ip_infos'];
    }
}