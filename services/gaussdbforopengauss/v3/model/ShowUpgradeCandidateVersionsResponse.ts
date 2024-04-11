import { RollUpgradeProgress } from './RollUpgradeProgress';
import { UpgradeTypeInfo } from './UpgradeTypeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpgradeCandidateVersionsResponse extends SdkResponse {
    private 'upgrade_type_list'?: Array<UpgradeTypeInfo>;
    private 'rollback_enabled'?: boolean;
    private 'source_version'?: string;
    private 'target_version'?: string;
    private 'roll_upgrade_progress'?: RollUpgradeProgress;
    private 'upgrade_candidate_versions'?: Array<string>;
    private 'hotfix_upgrade_candidate_versions'?: Array<string>;
    private 'hotfix_rollback_candidate_versions'?: Array<string>;
    public constructor() { 
        super();
    }
    public withUpgradeTypeList(upgradeTypeList: Array<UpgradeTypeInfo>): ShowUpgradeCandidateVersionsResponse {
        this['upgrade_type_list'] = upgradeTypeList;
        return this;
    }
    public set upgradeTypeList(upgradeTypeList: Array<UpgradeTypeInfo>  | undefined) {
        this['upgrade_type_list'] = upgradeTypeList;
    }
    public get upgradeTypeList(): Array<UpgradeTypeInfo> | undefined {
        return this['upgrade_type_list'];
    }
    public withRollbackEnabled(rollbackEnabled: boolean): ShowUpgradeCandidateVersionsResponse {
        this['rollback_enabled'] = rollbackEnabled;
        return this;
    }
    public set rollbackEnabled(rollbackEnabled: boolean  | undefined) {
        this['rollback_enabled'] = rollbackEnabled;
    }
    public get rollbackEnabled(): boolean | undefined {
        return this['rollback_enabled'];
    }
    public withSourceVersion(sourceVersion: string): ShowUpgradeCandidateVersionsResponse {
        this['source_version'] = sourceVersion;
        return this;
    }
    public set sourceVersion(sourceVersion: string  | undefined) {
        this['source_version'] = sourceVersion;
    }
    public get sourceVersion(): string | undefined {
        return this['source_version'];
    }
    public withTargetVersion(targetVersion: string): ShowUpgradeCandidateVersionsResponse {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withRollUpgradeProgress(rollUpgradeProgress: RollUpgradeProgress): ShowUpgradeCandidateVersionsResponse {
        this['roll_upgrade_progress'] = rollUpgradeProgress;
        return this;
    }
    public set rollUpgradeProgress(rollUpgradeProgress: RollUpgradeProgress  | undefined) {
        this['roll_upgrade_progress'] = rollUpgradeProgress;
    }
    public get rollUpgradeProgress(): RollUpgradeProgress | undefined {
        return this['roll_upgrade_progress'];
    }
    public withUpgradeCandidateVersions(upgradeCandidateVersions: Array<string>): ShowUpgradeCandidateVersionsResponse {
        this['upgrade_candidate_versions'] = upgradeCandidateVersions;
        return this;
    }
    public set upgradeCandidateVersions(upgradeCandidateVersions: Array<string>  | undefined) {
        this['upgrade_candidate_versions'] = upgradeCandidateVersions;
    }
    public get upgradeCandidateVersions(): Array<string> | undefined {
        return this['upgrade_candidate_versions'];
    }
    public withHotfixUpgradeCandidateVersions(hotfixUpgradeCandidateVersions: Array<string>): ShowUpgradeCandidateVersionsResponse {
        this['hotfix_upgrade_candidate_versions'] = hotfixUpgradeCandidateVersions;
        return this;
    }
    public set hotfixUpgradeCandidateVersions(hotfixUpgradeCandidateVersions: Array<string>  | undefined) {
        this['hotfix_upgrade_candidate_versions'] = hotfixUpgradeCandidateVersions;
    }
    public get hotfixUpgradeCandidateVersions(): Array<string> | undefined {
        return this['hotfix_upgrade_candidate_versions'];
    }
    public withHotfixRollbackCandidateVersions(hotfixRollbackCandidateVersions: Array<string>): ShowUpgradeCandidateVersionsResponse {
        this['hotfix_rollback_candidate_versions'] = hotfixRollbackCandidateVersions;
        return this;
    }
    public set hotfixRollbackCandidateVersions(hotfixRollbackCandidateVersions: Array<string>  | undefined) {
        this['hotfix_rollback_candidate_versions'] = hotfixRollbackCandidateVersions;
    }
    public get hotfixRollbackCandidateVersions(): Array<string> | undefined {
        return this['hotfix_rollback_candidate_versions'];
    }
}