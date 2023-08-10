import { ChangeSecurityGroup } from './ChangeSecurityGroup';


export class ChangeSecurityGroupRequestBody {
    private 'change_security_group'?: ChangeSecurityGroup;
    public constructor(changeSecurityGroup?: ChangeSecurityGroup) { 
        this['change_security_group'] = changeSecurityGroup;
    }
    public withChangeSecurityGroup(changeSecurityGroup: ChangeSecurityGroup): ChangeSecurityGroupRequestBody {
        this['change_security_group'] = changeSecurityGroup;
        return this;
    }
    public set changeSecurityGroup(changeSecurityGroup: ChangeSecurityGroup  | undefined) {
        this['change_security_group'] = changeSecurityGroup;
    }
    public get changeSecurityGroup(): ChangeSecurityGroup | undefined {
        return this['change_security_group'];
    }
}