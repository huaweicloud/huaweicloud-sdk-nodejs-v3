import { AffinityResponse } from './AffinityResponse';
import { CodeResponse } from './CodeResponse';
import { CustomResourceSpec } from './CustomResourceSpec';
import { DumpResponse } from './DumpResponse';
import { FileResponse } from './FileResponse';
import { HealthResponse } from './HealthResponse';
import { ImageInfoResponse } from './ImageInfoResponse';
import { InferModelResponse } from './InferModelResponse';
import { ServiceSecurityConfig } from './ServiceSecurityConfig';
import { TerminationGrace } from './TerminationGrace';


export class UnitConfigResponse {
    public id?: string;
    public name?: string;
    public role?: string;
    private 'custom_spec'?: CustomResourceSpec;
    public flavor?: string;
    public image?: ImageInfoResponse;
    public models?: Array<InferModelResponse>;
    public files?: Array<FileResponse>;
    public codes?: Array<CodeResponse>;
    public dumps?: Array<DumpResponse>;
    public count?: number;
    private 'group_count'?: number;
    public cmd?: string;
    public envs?: { [key: string]: string; };
    private 'readiness_health'?: HealthResponse;
    private 'startup_health'?: HealthResponse;
    private 'liveness_health'?: HealthResponse;
    public port?: number;
    public recovery?: string;
    private 'npu_reset_enable'?: boolean;
    public affinity?: AffinityResponse;
    private 'flavor_display_name'?: string;
    private 'termination_grace'?: TerminationGrace;
    private 'security_config'?: ServiceSecurityConfig;
    private 'pool_resource_flavor'?: string;
    public constructor(image?: ImageInfoResponse) { 
        this['image'] = image;
    }
    public withId(id: string): UnitConfigResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UnitConfigResponse {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): UnitConfigResponse {
        this['role'] = role;
        return this;
    }
    public withCustomSpec(customSpec: CustomResourceSpec): UnitConfigResponse {
        this['custom_spec'] = customSpec;
        return this;
    }
    public set customSpec(customSpec: CustomResourceSpec  | undefined) {
        this['custom_spec'] = customSpec;
    }
    public get customSpec(): CustomResourceSpec | undefined {
        return this['custom_spec'];
    }
    public withFlavor(flavor: string): UnitConfigResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withImage(image: ImageInfoResponse): UnitConfigResponse {
        this['image'] = image;
        return this;
    }
    public withModels(models: Array<InferModelResponse>): UnitConfigResponse {
        this['models'] = models;
        return this;
    }
    public withFiles(files: Array<FileResponse>): UnitConfigResponse {
        this['files'] = files;
        return this;
    }
    public withCodes(codes: Array<CodeResponse>): UnitConfigResponse {
        this['codes'] = codes;
        return this;
    }
    public withDumps(dumps: Array<DumpResponse>): UnitConfigResponse {
        this['dumps'] = dumps;
        return this;
    }
    public withCount(count: number): UnitConfigResponse {
        this['count'] = count;
        return this;
    }
    public withGroupCount(groupCount: number): UnitConfigResponse {
        this['group_count'] = groupCount;
        return this;
    }
    public set groupCount(groupCount: number  | undefined) {
        this['group_count'] = groupCount;
    }
    public get groupCount(): number | undefined {
        return this['group_count'];
    }
    public withCmd(cmd: string): UnitConfigResponse {
        this['cmd'] = cmd;
        return this;
    }
    public withEnvs(envs: { [key: string]: string; }): UnitConfigResponse {
        this['envs'] = envs;
        return this;
    }
    public withReadinessHealth(readinessHealth: HealthResponse): UnitConfigResponse {
        this['readiness_health'] = readinessHealth;
        return this;
    }
    public set readinessHealth(readinessHealth: HealthResponse  | undefined) {
        this['readiness_health'] = readinessHealth;
    }
    public get readinessHealth(): HealthResponse | undefined {
        return this['readiness_health'];
    }
    public withStartupHealth(startupHealth: HealthResponse): UnitConfigResponse {
        this['startup_health'] = startupHealth;
        return this;
    }
    public set startupHealth(startupHealth: HealthResponse  | undefined) {
        this['startup_health'] = startupHealth;
    }
    public get startupHealth(): HealthResponse | undefined {
        return this['startup_health'];
    }
    public withLivenessHealth(livenessHealth: HealthResponse): UnitConfigResponse {
        this['liveness_health'] = livenessHealth;
        return this;
    }
    public set livenessHealth(livenessHealth: HealthResponse  | undefined) {
        this['liveness_health'] = livenessHealth;
    }
    public get livenessHealth(): HealthResponse | undefined {
        return this['liveness_health'];
    }
    public withPort(port: number): UnitConfigResponse {
        this['port'] = port;
        return this;
    }
    public withRecovery(recovery: string): UnitConfigResponse {
        this['recovery'] = recovery;
        return this;
    }
    public withNpuResetEnable(npuResetEnable: boolean): UnitConfigResponse {
        this['npu_reset_enable'] = npuResetEnable;
        return this;
    }
    public set npuResetEnable(npuResetEnable: boolean  | undefined) {
        this['npu_reset_enable'] = npuResetEnable;
    }
    public get npuResetEnable(): boolean | undefined {
        return this['npu_reset_enable'];
    }
    public withAffinity(affinity: AffinityResponse): UnitConfigResponse {
        this['affinity'] = affinity;
        return this;
    }
    public withFlavorDisplayName(flavorDisplayName: string): UnitConfigResponse {
        this['flavor_display_name'] = flavorDisplayName;
        return this;
    }
    public set flavorDisplayName(flavorDisplayName: string  | undefined) {
        this['flavor_display_name'] = flavorDisplayName;
    }
    public get flavorDisplayName(): string | undefined {
        return this['flavor_display_name'];
    }
    public withTerminationGrace(terminationGrace: TerminationGrace): UnitConfigResponse {
        this['termination_grace'] = terminationGrace;
        return this;
    }
    public set terminationGrace(terminationGrace: TerminationGrace  | undefined) {
        this['termination_grace'] = terminationGrace;
    }
    public get terminationGrace(): TerminationGrace | undefined {
        return this['termination_grace'];
    }
    public withSecurityConfig(securityConfig: ServiceSecurityConfig): UnitConfigResponse {
        this['security_config'] = securityConfig;
        return this;
    }
    public set securityConfig(securityConfig: ServiceSecurityConfig  | undefined) {
        this['security_config'] = securityConfig;
    }
    public get securityConfig(): ServiceSecurityConfig | undefined {
        return this['security_config'];
    }
    public withPoolResourceFlavor(poolResourceFlavor: string): UnitConfigResponse {
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