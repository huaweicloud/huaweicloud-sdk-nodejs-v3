import { VpcConfigInfo } from './VpcConfigInfo';


export class UpdateSubnetIdsRequestBody {
    private 'subnet_ids'?: Array<string>;
    private 'vpc_config_infos'?: Array<VpcConfigInfo>;
    public constructor() { 
    }
    public withSubnetIds(subnetIds: Array<string>): UpdateSubnetIdsRequestBody {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
    public withVpcConfigInfos(vpcConfigInfos: Array<VpcConfigInfo>): UpdateSubnetIdsRequestBody {
        this['vpc_config_infos'] = vpcConfigInfos;
        return this;
    }
    public set vpcConfigInfos(vpcConfigInfos: Array<VpcConfigInfo>  | undefined) {
        this['vpc_config_infos'] = vpcConfigInfos;
    }
    public get vpcConfigInfos(): Array<VpcConfigInfo> | undefined {
        return this['vpc_config_infos'];
    }
}