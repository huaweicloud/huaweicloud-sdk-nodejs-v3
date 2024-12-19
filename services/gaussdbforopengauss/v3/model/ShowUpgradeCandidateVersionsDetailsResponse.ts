import { CanBeRollbackedHotfixDetail } from './CanBeRollbackedHotfixDetail';
import { CanBeUpgradedHotfixDetail } from './CanBeUpgradedHotfixDetail';
import { RollUpgradeProgress } from './RollUpgradeProgress';
import { UpgradeTypeInfo } from './UpgradeTypeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpgradeCandidateVersionsDetailsResponse extends SdkResponse {
    private 'upgrade_type_list'?: Array<UpgradeTypeInfo>;
    private 'rollback_enabled'?: boolean;
    private 'source_version'?: string;
    private 'target_version'?: string;
    private 'roll_upgrade_progress'?: RollUpgradeProgress;
    private 'upgrade_candidate_versions'?: Array<string>;
    private 'hotfix_upgrade_candidate_versions'?: Array<string>;
    private 'hotfix_rollback_candidate_versions'?: Array<string>;
    private 'hotfix_upgrade_infos'?: Array<CanBeUpgradedHotfixDetail>;
    private 'hotfix_rollback_infos'?: Array<CanBeRollbackedHotfixDetail>;
    public constructor() { 
        super();
    }
    public withUpgradeTypeList(upgradeTypeList: Array<UpgradeTypeInfo>): ShowUpgradeCandidateVersionsDetailsResponse {
        this['upgrade_type_list'] = upgradeTypeList;
        return this;
    }
    public set upgradeTypeList(upgradeTypeList: Array<UpgradeTypeInfo>  | undefined) {
        this['upgrade_type_list'] = upgradeTypeList;
    }
    public get upgradeTypeList(): Array<UpgradeTypeInfo> | undefined {
        return this['upgrade_type_list'];
    }
    public withRollbackEnabled(rollbackEnabled: boolean): ShowUpgradeCandidateVersionsDetailsResponse {
        this['rollback_enabled'] = rollbackEnabled;
        return this;
    }
    public set rollbackEnabled(rollbackEnabled: boolean  | undefined) {
        this['rollback_enabled'] = rollbackEnabled;
    }
    public get rollbackEnabled(): boolean | undefined {
        return this['rollback_enabled'];
    }
    public withSourceVersion(sourceVersion: string): ShowUpgradeCandidateVersionsDetailsResponse {
        this['source_version'] = sourceVersion;
        return this;
    }
    public set sourceVersion(sourceVersion: string  | undefined) {
        this['source_version'] = sourceVersion;
    }
    public get sourceVersion(): string | undefined {
        return this['source_version'];
    }
    public withTargetVersion(targetVersion: string): ShowUpgradeCandidateVersionsDetailsResponse {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withRollUpgradeProgress(rollUpgradeProgress: RollUpgradeProgress): ShowUpgradeCandidateVersionsDetailsResponse {
        this['roll_upgrade_progress'] = rollUpgradeProgress;
        return this;
    }
    public set rollUpgradeProgress(rollUpgradeProgress: RollUpgradeProgress  | undefined) {
        this['roll_upgrade_progress'] = rollUpgradeProgress;
    }
    public get rollUpgradeProgress(): RollUpgradeProgress | undefined {
        return this['roll_upgrade_progress'];
    }
    public withUpgradeCandidateVersions(upgradeCandidateVersions: Array<string>): ShowUpgradeCandidateVersionsDetailsResponse {
        this['upgrade_candidate_versions'] = upgradeCandidateVersions;
        return this;
    }
    public set upgradeCandidateVersions(upgradeCandidateVersions: Array<string>  | undefined) {
        this['upgrade_candidate_versions'] = upgradeCandidateVersions;
    }
    public get upgradeCandidateVersions(): Array<string> | undefined {
        return this['upgrade_candidate_versions'];
    }
    public withHotfixUpgradeCandidateVersions(hotfixUpgradeCandidateVersions: Array<string>): ShowUpgradeCandidateVersionsDetailsResponse {
        this['hotfix_upgrade_candidate_versions'] = hotfixUpgradeCandidateVersions;
        return this;
    }
    public set hotfixUpgradeCandidateVersions(hotfixUpgradeCandidateVersions: Array<string>  | undefined) {
        this['hotfix_upgrade_candidate_versions'] = hotfixUpgradeCandidateVersions;
    }
    public get hotfixUpgradeCandidateVersions(): Array<string> | undefined {
        return this['hotfix_upgrade_candidate_versions'];
    }
    public withHotfixRollbackCandidateVersions(hotfixRollbackCandidateVersions: Array<string>): ShowUpgradeCandidateVersionsDetailsResponse {
        this['hotfix_rollback_candidate_versions'] = hotfixRollbackCandidateVersions;
        return this;
    }
    public set hotfixRollbackCandidateVersions(hotfixRollbackCandidateVersions: Array<string>  | undefined) {
        this['hotfix_rollback_candidate_versions'] = hotfixRollbackCandidateVersions;
    }
    public get hotfixRollbackCandidateVersions(): Array<string> | undefined {
        return this['hotfix_rollback_candidate_versions'];
    }
    public withHotfixUpgradeInfos(hotfixUpgradeInfos: Array<CanBeUpgradedHotfixDetail>): ShowUpgradeCandidateVersionsDetailsResponse {
        this['hotfix_upgrade_infos'] = hotfixUpgradeInfos;
        return this;
    }
    public set hotfixUpgradeInfos(hotfixUpgradeInfos: Array<CanBeUpgradedHotfixDetail>  | undefined) {
        this['hotfix_upgrade_infos'] = hotfixUpgradeInfos;
    }
    public get hotfixUpgradeInfos(): Array<CanBeUpgradedHotfixDetail> | undefined {
        return this['hotfix_upgrade_infos'];
    }
    public withHotfixRollbackInfos(hotfixRollbackInfos: Array<CanBeRollbackedHotfixDetail>): ShowUpgradeCandidateVersionsDetailsResponse {
        this['hotfix_rollback_infos'] = hotfixRollbackInfos;
        return this;
    }
    public set hotfixRollbackInfos(hotfixRollbackInfos: Array<CanBeRollbackedHotfixDetail>  | undefined) {
        this['hotfix_rollback_infos'] = hotfixRollbackInfos;
    }
    public get hotfixRollbackInfos(): Array<CanBeRollbackedHotfixDetail> | undefined {
        return this['hotfix_rollback_infos'];
    }
}