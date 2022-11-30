import { VpcInfo } from './VpcInfo';


export class CreateVpcPeeringOption {
    public name: string;
    private 'request_vpc_info': VpcInfo | undefined;
    private 'accept_vpc_info': VpcInfo | undefined;
    public constructor(name?: any, requestVpcInfo?: any, acceptVpcInfo?: any) { 
        this['name'] = name;
        this['request_vpc_info'] = requestVpcInfo;
        this['accept_vpc_info'] = acceptVpcInfo;
    }
    public withName(name: string): CreateVpcPeeringOption {
        this['name'] = name;
        return this;
    }
    public withRequestVpcInfo(requestVpcInfo: VpcInfo): CreateVpcPeeringOption {
        this['request_vpc_info'] = requestVpcInfo;
        return this;
    }
    public set requestVpcInfo(requestVpcInfo: VpcInfo | undefined) {
        this['request_vpc_info'] = requestVpcInfo;
    }
    public get requestVpcInfo() {
        return this['request_vpc_info'];
    }
    public withAcceptVpcInfo(acceptVpcInfo: VpcInfo): CreateVpcPeeringOption {
        this['accept_vpc_info'] = acceptVpcInfo;
        return this;
    }
    public set acceptVpcInfo(acceptVpcInfo: VpcInfo | undefined) {
        this['accept_vpc_info'] = acceptVpcInfo;
    }
    public get acceptVpcInfo() {
        return this['accept_vpc_info'];
    }
}