import { DiagnoseResult } from './DiagnoseResult';
import { SecurityGroupStatus } from './SecurityGroupStatus';


export class SecurityGroupResult {
    public result?: DiagnoseResult;
    private 'security_group'?: Array<SecurityGroupStatus>;
    public constructor() { 
    }
    public withResult(result: DiagnoseResult): SecurityGroupResult {
        this['result'] = result;
        return this;
    }
    public withSecurityGroup(securityGroup: Array<SecurityGroupStatus>): SecurityGroupResult {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: Array<SecurityGroupStatus>  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): Array<SecurityGroupStatus> | undefined {
        return this['security_group'];
    }
}