import { RaspCveInfo } from './RaspCveInfo';


export class RaspPatchInfo {
    private 'chk_feature_id'?: number;
    private 'patch_name'?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'cve_list'?: Array<RaspCveInfo>;
    public artifact?: string;
    private 'vuln_version'?: string;
    private 'plugin_version'?: string;
    public description?: string;
    private 'optional_protective_action'?: number;
    private 'protective_action'?: number;
    public constructor() { 
    }
    public withChkFeatureId(chkFeatureId: number): RaspPatchInfo {
        this['chk_feature_id'] = chkFeatureId;
        return this;
    }
    public set chkFeatureId(chkFeatureId: number  | undefined) {
        this['chk_feature_id'] = chkFeatureId;
    }
    public get chkFeatureId(): number | undefined {
        return this['chk_feature_id'];
    }
    public withPatchName(patchName: string): RaspPatchInfo {
        this['patch_name'] = patchName;
        return this;
    }
    public set patchName(patchName: string  | undefined) {
        this['patch_name'] = patchName;
    }
    public get patchName(): string | undefined {
        return this['patch_name'];
    }
    public withVulId(vulId: string): RaspPatchInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): RaspPatchInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withCveList(cveList: Array<RaspCveInfo>): RaspPatchInfo {
        this['cve_list'] = cveList;
        return this;
    }
    public set cveList(cveList: Array<RaspCveInfo>  | undefined) {
        this['cve_list'] = cveList;
    }
    public get cveList(): Array<RaspCveInfo> | undefined {
        return this['cve_list'];
    }
    public withArtifact(artifact: string): RaspPatchInfo {
        this['artifact'] = artifact;
        return this;
    }
    public withVulnVersion(vulnVersion: string): RaspPatchInfo {
        this['vuln_version'] = vulnVersion;
        return this;
    }
    public set vulnVersion(vulnVersion: string  | undefined) {
        this['vuln_version'] = vulnVersion;
    }
    public get vulnVersion(): string | undefined {
        return this['vuln_version'];
    }
    public withPluginVersion(pluginVersion: string): RaspPatchInfo {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withDescription(description: string): RaspPatchInfo {
        this['description'] = description;
        return this;
    }
    public withOptionalProtectiveAction(optionalProtectiveAction: number): RaspPatchInfo {
        this['optional_protective_action'] = optionalProtectiveAction;
        return this;
    }
    public set optionalProtectiveAction(optionalProtectiveAction: number  | undefined) {
        this['optional_protective_action'] = optionalProtectiveAction;
    }
    public get optionalProtectiveAction(): number | undefined {
        return this['optional_protective_action'];
    }
    public withProtectiveAction(protectiveAction: number): RaspPatchInfo {
        this['protective_action'] = protectiveAction;
        return this;
    }
    public set protectiveAction(protectiveAction: number  | undefined) {
        this['protective_action'] = protectiveAction;
    }
    public get protectiveAction(): number | undefined {
        return this['protective_action'];
    }
}