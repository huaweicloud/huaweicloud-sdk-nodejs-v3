import { PrivateNetworkSegmentVO } from './PrivateNetworkSegmentVO';


export class ListPrivateNetworkSegmentsVO {
    private 'private_network_list'?: Array<PrivateNetworkSegmentVO>;
    public total?: number;
    public quota?: number;
    private 'support_az_list'?: Array<string>;
    public constructor() { 
    }
    public withPrivateNetworkList(privateNetworkList: Array<PrivateNetworkSegmentVO>): ListPrivateNetworkSegmentsVO {
        this['private_network_list'] = privateNetworkList;
        return this;
    }
    public set privateNetworkList(privateNetworkList: Array<PrivateNetworkSegmentVO>  | undefined) {
        this['private_network_list'] = privateNetworkList;
    }
    public get privateNetworkList(): Array<PrivateNetworkSegmentVO> | undefined {
        return this['private_network_list'];
    }
    public withTotal(total: number): ListPrivateNetworkSegmentsVO {
        this['total'] = total;
        return this;
    }
    public withQuota(quota: number): ListPrivateNetworkSegmentsVO {
        this['quota'] = quota;
        return this;
    }
    public withSupportAzList(supportAzList: Array<string>): ListPrivateNetworkSegmentsVO {
        this['support_az_list'] = supportAzList;
        return this;
    }
    public set supportAzList(supportAzList: Array<string>  | undefined) {
        this['support_az_list'] = supportAzList;
    }
    public get supportAzList(): Array<string> | undefined {
        return this['support_az_list'];
    }
}