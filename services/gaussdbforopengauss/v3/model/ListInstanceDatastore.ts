import { HotfixVersionInfo } from './HotfixVersionInfo';


export class ListInstanceDatastore {
    public type?: string;
    public version?: string;
    private 'complete_version'?: string;
    private 'target_version'?: string;
    private 'complete_kernel_version'?: string;
    private 'hotfix_version_infos'?: Array<HotfixVersionInfo>;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): ListInstanceDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListInstanceDatastore {
        this['version'] = version;
        return this;
    }
    public withCompleteVersion(completeVersion: string): ListInstanceDatastore {
        this['complete_version'] = completeVersion;
        return this;
    }
    public set completeVersion(completeVersion: string  | undefined) {
        this['complete_version'] = completeVersion;
    }
    public get completeVersion(): string | undefined {
        return this['complete_version'];
    }
    public withTargetVersion(targetVersion: string): ListInstanceDatastore {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withCompleteKernelVersion(completeKernelVersion: string): ListInstanceDatastore {
        this['complete_kernel_version'] = completeKernelVersion;
        return this;
    }
    public set completeKernelVersion(completeKernelVersion: string  | undefined) {
        this['complete_kernel_version'] = completeKernelVersion;
    }
    public get completeKernelVersion(): string | undefined {
        return this['complete_kernel_version'];
    }
    public withHotfixVersionInfos(hotfixVersionInfos: Array<HotfixVersionInfo>): ListInstanceDatastore {
        this['hotfix_version_infos'] = hotfixVersionInfos;
        return this;
    }
    public set hotfixVersionInfos(hotfixVersionInfos: Array<HotfixVersionInfo>  | undefined) {
        this['hotfix_version_infos'] = hotfixVersionInfos;
    }
    public get hotfixVersionInfos(): Array<HotfixVersionInfo> | undefined {
        return this['hotfix_version_infos'];
    }
}