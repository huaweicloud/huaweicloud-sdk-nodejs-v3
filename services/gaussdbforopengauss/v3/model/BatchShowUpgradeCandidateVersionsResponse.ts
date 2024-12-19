import { HotfixInfoResult } from './HotfixInfoResult';
import { UpgradeTypeInfo } from './UpgradeTypeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowUpgradeCandidateVersionsResponse extends SdkResponse {
    private 'upgrade_type_list'?: Array<UpgradeTypeInfo>;
    private 'target_version'?: string;
    private 'upgrade_candidate_versions'?: Array<string>;
    private 'hotfix_upgrade_infos'?: Array<HotfixInfoResult>;
    private 'hotfix_rollback_infos'?: Array<HotfixInfoResult>;
    public constructor() { 
        super();
    }
    public withUpgradeTypeList(upgradeTypeList: Array<UpgradeTypeInfo>): BatchShowUpgradeCandidateVersionsResponse {
        this['upgrade_type_list'] = upgradeTypeList;
        return this;
    }
    public set upgradeTypeList(upgradeTypeList: Array<UpgradeTypeInfo>  | undefined) {
        this['upgrade_type_list'] = upgradeTypeList;
    }
    public get upgradeTypeList(): Array<UpgradeTypeInfo> | undefined {
        return this['upgrade_type_list'];
    }
    public withTargetVersion(targetVersion: string): BatchShowUpgradeCandidateVersionsResponse {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withUpgradeCandidateVersions(upgradeCandidateVersions: Array<string>): BatchShowUpgradeCandidateVersionsResponse {
        this['upgrade_candidate_versions'] = upgradeCandidateVersions;
        return this;
    }
    public set upgradeCandidateVersions(upgradeCandidateVersions: Array<string>  | undefined) {
        this['upgrade_candidate_versions'] = upgradeCandidateVersions;
    }
    public get upgradeCandidateVersions(): Array<string> | undefined {
        return this['upgrade_candidate_versions'];
    }
    public withHotfixUpgradeInfos(hotfixUpgradeInfos: Array<HotfixInfoResult>): BatchShowUpgradeCandidateVersionsResponse {
        this['hotfix_upgrade_infos'] = hotfixUpgradeInfos;
        return this;
    }
    public set hotfixUpgradeInfos(hotfixUpgradeInfos: Array<HotfixInfoResult>  | undefined) {
        this['hotfix_upgrade_infos'] = hotfixUpgradeInfos;
    }
    public get hotfixUpgradeInfos(): Array<HotfixInfoResult> | undefined {
        return this['hotfix_upgrade_infos'];
    }
    public withHotfixRollbackInfos(hotfixRollbackInfos: Array<HotfixInfoResult>): BatchShowUpgradeCandidateVersionsResponse {
        this['hotfix_rollback_infos'] = hotfixRollbackInfos;
        return this;
    }
    public set hotfixRollbackInfos(hotfixRollbackInfos: Array<HotfixInfoResult>  | undefined) {
        this['hotfix_rollback_infos'] = hotfixRollbackInfos;
    }
    public get hotfixRollbackInfos(): Array<HotfixInfoResult> | undefined {
        return this['hotfix_rollback_infos'];
    }
}