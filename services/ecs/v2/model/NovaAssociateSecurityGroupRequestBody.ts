import { NovaAddSecurityGroupOption } from './NovaAddSecurityGroupOption';


export class NovaAssociateSecurityGroupRequestBody {
    public addSecurityGroup: NovaAddSecurityGroupOption;
    public constructor(addSecurityGroup?: any) { 
        this['addSecurityGroup'] = addSecurityGroup;
    }
    public withAddSecurityGroup(addSecurityGroup: NovaAddSecurityGroupOption): NovaAssociateSecurityGroupRequestBody {
        this['addSecurityGroup'] = addSecurityGroup;
        return this;
    }
}