import { Affinity } from './Affinity';
import { Code } from './Code';
import { CustomResourceSpec } from './CustomResourceSpec';
import { Dump } from './Dump';
import { FileInfo } from './FileInfo';
import { Health } from './Health';
import { ImageInfo } from './ImageInfo';
import { ModelResource } from './ModelResource';
import { ServiceSecurityConfig } from './ServiceSecurityConfig';
import { TerminationGrace } from './TerminationGrace';


export class UnitConfig {
    public id?: string;
    public name?: string;
    public role?: string;
    private 'custom_spec'?: CustomResourceSpec;
    public flavor?: string;
    private 'flavor_display_name'?: string;
    public image?: ImageInfo;
    public models?: Array<ModelResource>;
    public codes?: Array<Code>;
    public files?: Array<FileInfo>;
    public dumps?: Array<Dump>;
    public count?: number;
    public cmd?: string;
    private 'termination_grace'?: TerminationGrace;
    public envs?: { [key: string]: string; };
    private 'readiness_health'?: Health;
    private 'startup_health'?: Health;
    private 'liveness_health'?: Health;
    public port?: number;
    public recovery?: string;
    private 'npu_reset_enable'?: boolean;
    private 'group_count'?: number;
    public affinity?: Affinity;
    private 'security_config'?: ServiceSecurityConfig;
    private 'pool_resource_flavor'?: string;
    public constructor(image?: ImageInfo) { 
        this['image'] = image;
    }
    public withId(id: string): UnitConfig {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UnitConfig {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): UnitConfig {
        this['role'] = role;
        return this;
    }
    public withCustomSpec(customSpec: CustomResourceSpec): UnitConfig {
        this['custom_spec'] = customSpec;
        return this;
    }
    public set customSpec(customSpec: CustomResourceSpec  | undefined) {
        this['custom_spec'] = customSpec;
    }
    public get customSpec(): CustomResourceSpec | undefined {
        return this['custom_spec'];
    }
    public withFlavor(flavor: string): UnitConfig {
        this['flavor'] = flavor;
        return this;
    }
    public withFlavorDisplayName(flavorDisplayName: string): UnitConfig {
        this['flavor_display_name'] = flavorDisplayName;
        return this;
    }
    public set flavorDisplayName(flavorDisplayName: string  | undefined) {
        this['flavor_display_name'] = flavorDisplayName;
    }
    public get flavorDisplayName(): string | undefined {
        return this['flavor_display_name'];
    }
    public withImage(image: ImageInfo): UnitConfig {
        this['image'] = image;
        return this;
    }
    public withModels(models: Array<ModelResource>): UnitConfig {
        this['models'] = models;
        return this;
    }
    public withCodes(codes: Array<Code>): UnitConfig {
        this['codes'] = codes;
        return this;
    }
    public withFiles(files: Array<FileInfo>): UnitConfig {
        this['files'] = files;
        return this;
    }
    public withDumps(dumps: Array<Dump>): UnitConfig {
        this['dumps'] = dumps;
        return this;
    }
    public withCount(count: number): UnitConfig {
        this['count'] = count;
        return this;
    }
    public withCmd(cmd: string): UnitConfig {
        this['cmd'] = cmd;
        return this;
    }
    public withTerminationGrace(terminationGrace: TerminationGrace): UnitConfig {
        this['termination_grace'] = terminationGrace;
        return this;
    }
    public set terminationGrace(terminationGrace: TerminationGrace  | undefined) {
        this['termination_grace'] = terminationGrace;
    }
    public get terminationGrace(): TerminationGrace | undefined {
        return this['termination_grace'];
    }
    public withEnvs(envs: { [key: string]: string; }): UnitConfig {
        this['envs'] = envs;
        return this;
    }
    public withReadinessHealth(readinessHealth: Health): UnitConfig {
        this['readiness_health'] = readinessHealth;
        return this;
    }
    public set readinessHealth(readinessHealth: Health  | undefined) {
        this['readiness_health'] = readinessHealth;
    }
    public get readinessHealth(): Health | undefined {
        return this['readiness_health'];
    }
    public withStartupHealth(startupHealth: Health): UnitConfig {
        this['startup_health'] = startupHealth;
        return this;
    }
    public set startupHealth(startupHealth: Health  | undefined) {
        this['startup_health'] = startupHealth;
    }
    public get startupHealth(): Health | undefined {
        return this['startup_health'];
    }
    public withLivenessHealth(livenessHealth: Health): UnitConfig {
        this['liveness_health'] = livenessHealth;
        return this;
    }
    public set livenessHealth(livenessHealth: Health  | undefined) {
        this['liveness_health'] = livenessHealth;
    }
    public get livenessHealth(): Health | undefined {
        return this['liveness_health'];
    }
    public withPort(port: number): UnitConfig {
        this['port'] = port;
        return this;
    }
    public withRecovery(recovery: string): UnitConfig {
        this['recovery'] = recovery;
        return this;
    }
    public withNpuResetEnable(npuResetEnable: boolean): UnitConfig {
        this['npu_reset_enable'] = npuResetEnable;
        return this;
    }
    public set npuResetEnable(npuResetEnable: boolean  | undefined) {
        this['npu_reset_enable'] = npuResetEnable;
    }
    public get npuResetEnable(): boolean | undefined {
        return this['npu_reset_enable'];
    }
    public withGroupCount(groupCount: number): UnitConfig {
        this['group_count'] = groupCount;
        return this;
    }
    public set groupCount(groupCount: number  | undefined) {
        this['group_count'] = groupCount;
    }
    public get groupCount(): number | undefined {
        return this['group_count'];
    }
    public withAffinity(affinity: Affinity): UnitConfig {
        this['affinity'] = affinity;
        return this;
    }
    public withSecurityConfig(securityConfig: ServiceSecurityConfig): UnitConfig {
        this['security_config'] = securityConfig;
        return this;
    }
    public set securityConfig(securityConfig: ServiceSecurityConfig  | undefined) {
        this['security_config'] = securityConfig;
    }
    public get securityConfig(): ServiceSecurityConfig | undefined {
        return this['security_config'];
    }
    public withPoolResourceFlavor(poolResourceFlavor: string): UnitConfig {
        this['pool_resource_flavor'] = poolResourceFlavor;
        return this;
    }
    public set poolResourceFlavor(poolResourceFlavor: string  | undefined) {
        this['pool_resource_flavor'] = poolResourceFlavor;
    }
    public get poolResourceFlavor(): string | undefined {
        return this['pool_resource_flavor'];
    }
}