

export class VpcAttachmentDetail {
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withVpcId(vpcId: string): VpcAttachmentDetail {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}