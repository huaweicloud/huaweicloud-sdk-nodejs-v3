

export class UpdateVpcepWhitelistReq {
    private 'vpc_permissions'?: Array<string>;
    public constructor(vpcPermissions?: Array<string>) { 
        this['vpc_permissions'] = vpcPermissions;
    }
    public withVpcPermissions(vpcPermissions: Array<string>): UpdateVpcepWhitelistReq {
        this['vpc_permissions'] = vpcPermissions;
        return this;
    }
    public set vpcPermissions(vpcPermissions: Array<string>  | undefined) {
        this['vpc_permissions'] = vpcPermissions;
    }
    public get vpcPermissions(): Array<string> | undefined {
        return this['vpc_permissions'];
    }
}