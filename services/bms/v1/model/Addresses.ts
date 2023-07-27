import { Address } from './Address';


export class Addresses {
    private 'vpc_id'?: Array<Address>;
    public constructor(vpcId?: Array<Address>) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: Array<Address>): Addresses {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<Address>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<Address> | undefined {
        return this['vpc_id'];
    }
}