import { VpcAndSubNet } from './VpcAndSubNet';


export class CreateVpcCondition {
    private 'host_id_list'?: Array<string>;
    private 'vpc_list'?: Array<VpcAndSubNet>;
    public constructor() { 
    }
    public withHostIdList(hostIdList: Array<string>): CreateVpcCondition {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withVpcList(vpcList: Array<VpcAndSubNet>): CreateVpcCondition {
        this['vpc_list'] = vpcList;
        return this;
    }
    public set vpcList(vpcList: Array<VpcAndSubNet>  | undefined) {
        this['vpc_list'] = vpcList;
    }
    public get vpcList(): Array<VpcAndSubNet> | undefined {
        return this['vpc_list'];
    }
}