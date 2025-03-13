import { PublicNetworkAccess } from './PublicNetworkAccess';
import { SecurityCertification } from './SecurityCertification';
import { SecurityGroupResult } from './SecurityGroupResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityDatasourceProtectionDiagnoseResultResponse extends SdkResponse {
    private 'task_id'?: string;
    public scanning?: boolean;
    private 'check_time'?: number;
    public kerberos?: SecurityCertification;
    private 'public_network_access'?: PublicNetworkAccess;
    private 'security_group'?: SecurityGroupResult;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowSecurityDatasourceProtectionDiagnoseResultResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withScanning(scanning: boolean): ShowSecurityDatasourceProtectionDiagnoseResultResponse {
        this['scanning'] = scanning;
        return this;
    }
    public withCheckTime(checkTime: number): ShowSecurityDatasourceProtectionDiagnoseResultResponse {
        this['check_time'] = checkTime;
        return this;
    }
    public set checkTime(checkTime: number  | undefined) {
        this['check_time'] = checkTime;
    }
    public get checkTime(): number | undefined {
        return this['check_time'];
    }
    public withKerberos(kerberos: SecurityCertification): ShowSecurityDatasourceProtectionDiagnoseResultResponse {
        this['kerberos'] = kerberos;
        return this;
    }
    public withPublicNetworkAccess(publicNetworkAccess: PublicNetworkAccess): ShowSecurityDatasourceProtectionDiagnoseResultResponse {
        this['public_network_access'] = publicNetworkAccess;
        return this;
    }
    public set publicNetworkAccess(publicNetworkAccess: PublicNetworkAccess  | undefined) {
        this['public_network_access'] = publicNetworkAccess;
    }
    public get publicNetworkAccess(): PublicNetworkAccess | undefined {
        return this['public_network_access'];
    }
    public withSecurityGroup(securityGroup: SecurityGroupResult): ShowSecurityDatasourceProtectionDiagnoseResultResponse {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: SecurityGroupResult  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): SecurityGroupResult | undefined {
        return this['security_group'];
    }
}