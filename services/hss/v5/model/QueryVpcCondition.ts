

export class QueryVpcCondition {
    private 'host_id_list'?: Array<string>;
    private 'vpc_id_list'?: Array<string>;
    public constructor() { 
    }
    public withHostIdList(hostIdList: Array<string>): QueryVpcCondition {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withVpcIdList(vpcIdList: Array<string>): QueryVpcCondition {
        this['vpc_id_list'] = vpcIdList;
        return this;
    }
    public set vpcIdList(vpcIdList: Array<string>  | undefined) {
        this['vpc_id_list'] = vpcIdList;
    }
    public get vpcIdList(): Array<string> | undefined {
        return this['vpc_id_list'];
    }
}