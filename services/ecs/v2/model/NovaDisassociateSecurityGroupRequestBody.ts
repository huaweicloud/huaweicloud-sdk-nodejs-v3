import { NovaRemoveSecurityGroupOption } from './NovaRemoveSecurityGroupOption';


export class NovaDisassociateSecurityGroupRequestBody {
    public removeSecurityGroup?: NovaRemoveSecurityGroupOption;
    public constructor(removeSecurityGroup?: NovaRemoveSecurityGroupOption) { 
        this['removeSecurityGroup'] = removeSecurityGroup;
    }
    public withRemoveSecurityGroup(removeSecurityGroup: NovaRemoveSecurityGroupOption): NovaDisassociateSecurityGroupRequestBody {
        this['removeSecurityGroup'] = removeSecurityGroup;
        return this;
    }
}