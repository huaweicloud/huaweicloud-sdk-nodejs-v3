import { CompliancePackageModel } from './CompliancePackageModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCompliancePackagesResponse extends SdkResponse {
    public count?: number;
    private 'builtin_compliance_num'?: number;
    private 'customized_compliance_num'?: number;
    private 'disabled_compliance_num'?: number;
    private 'enabled_compliance_num'?: number;
    private 'compliance_packages'?: Array<CompliancePackageModel>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchCompliancePackagesResponse {
        this['count'] = count;
        return this;
    }
    public withBuiltinComplianceNum(builtinComplianceNum: number): SearchCompliancePackagesResponse {
        this['builtin_compliance_num'] = builtinComplianceNum;
        return this;
    }
    public set builtinComplianceNum(builtinComplianceNum: number  | undefined) {
        this['builtin_compliance_num'] = builtinComplianceNum;
    }
    public get builtinComplianceNum(): number | undefined {
        return this['builtin_compliance_num'];
    }
    public withCustomizedComplianceNum(customizedComplianceNum: number): SearchCompliancePackagesResponse {
        this['customized_compliance_num'] = customizedComplianceNum;
        return this;
    }
    public set customizedComplianceNum(customizedComplianceNum: number  | undefined) {
        this['customized_compliance_num'] = customizedComplianceNum;
    }
    public get customizedComplianceNum(): number | undefined {
        return this['customized_compliance_num'];
    }
    public withDisabledComplianceNum(disabledComplianceNum: number): SearchCompliancePackagesResponse {
        this['disabled_compliance_num'] = disabledComplianceNum;
        return this;
    }
    public set disabledComplianceNum(disabledComplianceNum: number  | undefined) {
        this['disabled_compliance_num'] = disabledComplianceNum;
    }
    public get disabledComplianceNum(): number | undefined {
        return this['disabled_compliance_num'];
    }
    public withEnabledComplianceNum(enabledComplianceNum: number): SearchCompliancePackagesResponse {
        this['enabled_compliance_num'] = enabledComplianceNum;
        return this;
    }
    public set enabledComplianceNum(enabledComplianceNum: number  | undefined) {
        this['enabled_compliance_num'] = enabledComplianceNum;
    }
    public get enabledComplianceNum(): number | undefined {
        return this['enabled_compliance_num'];
    }
    public withCompliancePackages(compliancePackages: Array<CompliancePackageModel>): SearchCompliancePackagesResponse {
        this['compliance_packages'] = compliancePackages;
        return this;
    }
    public set compliancePackages(compliancePackages: Array<CompliancePackageModel>  | undefined) {
        this['compliance_packages'] = compliancePackages;
    }
    public get compliancePackages(): Array<CompliancePackageModel> | undefined {
        return this['compliance_packages'];
    }
}