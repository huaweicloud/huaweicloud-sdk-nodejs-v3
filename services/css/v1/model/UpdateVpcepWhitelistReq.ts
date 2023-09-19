

export class UpdateVpcepWhitelistReq {
    public vpcPermissions?: Array<string>;
    public constructor(vpcPermissions?: Array<string>) { 
        this['vpcPermissions'] = vpcPermissions;
    }
    public withVpcPermissions(vpcPermissions: Array<string>): UpdateVpcepWhitelistReq {
        this['vpcPermissions'] = vpcPermissions;
        return this;
    }
}