import { ClusterPolicyResponseInfo } from './ClusterPolicyResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterProtectionDefaultPolicyResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'x_auth_token'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public region?: string;
    private 'general_policy_num'?: number;
    private 'malicious_image_policy_num'?: number;
    private 'security_policy_num'?: number;
    private 'data_list'?: Array<ClusterPolicyResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterProtectionDefaultPolicyResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withXAuthToken(xAuthToken: string): ListClusterProtectionDefaultPolicyResponse {
        this['x_auth_token'] = xAuthToken;
        return this;
    }
    public set xAuthToken(xAuthToken: string  | undefined) {
        this['x_auth_token'] = xAuthToken;
    }
    public get xAuthToken(): string | undefined {
        return this['x_auth_token'];
    }
    public withProjectId(projectId: string): ListClusterProtectionDefaultPolicyResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClusterProtectionDefaultPolicyResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegion(region: string): ListClusterProtectionDefaultPolicyResponse {
        this['region'] = region;
        return this;
    }
    public withGeneralPolicyNum(generalPolicyNum: number): ListClusterProtectionDefaultPolicyResponse {
        this['general_policy_num'] = generalPolicyNum;
        return this;
    }
    public set generalPolicyNum(generalPolicyNum: number  | undefined) {
        this['general_policy_num'] = generalPolicyNum;
    }
    public get generalPolicyNum(): number | undefined {
        return this['general_policy_num'];
    }
    public withMaliciousImagePolicyNum(maliciousImagePolicyNum: number): ListClusterProtectionDefaultPolicyResponse {
        this['malicious_image_policy_num'] = maliciousImagePolicyNum;
        return this;
    }
    public set maliciousImagePolicyNum(maliciousImagePolicyNum: number  | undefined) {
        this['malicious_image_policy_num'] = maliciousImagePolicyNum;
    }
    public get maliciousImagePolicyNum(): number | undefined {
        return this['malicious_image_policy_num'];
    }
    public withSecurityPolicyNum(securityPolicyNum: number): ListClusterProtectionDefaultPolicyResponse {
        this['security_policy_num'] = securityPolicyNum;
        return this;
    }
    public set securityPolicyNum(securityPolicyNum: number  | undefined) {
        this['security_policy_num'] = securityPolicyNum;
    }
    public get securityPolicyNum(): number | undefined {
        return this['security_policy_num'];
    }
    public withDataList(dataList: Array<ClusterPolicyResponseInfo>): ListClusterProtectionDefaultPolicyResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ClusterPolicyResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ClusterPolicyResponseInfo> | undefined {
        return this['data_list'];
    }
}