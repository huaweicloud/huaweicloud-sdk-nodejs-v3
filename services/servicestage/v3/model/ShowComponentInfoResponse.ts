import { Build } from './Build';
import { ComponentAffinity } from './ComponentAffinity';
import { ComponentCommand } from './ComponentCommand';
import { ComponentEnvironment } from './ComponentEnvironment';
import { ComponentInfoCustomMetric } from './ComponentInfoCustomMetric';
import { ComponentInfoTomcatOpts } from './ComponentInfoTomcatOpts';
import { ComponentLifecycle } from './ComponentLifecycle';
import { ComponentLogs } from './ComponentLogs';
import { ComponentProbe } from './ComponentProbe';
import { ComponentStatusView } from './ComponentStatusView';
import { ComponentStorage } from './ComponentStorage';
import { DeployStrategy } from './DeployStrategy';
import { Label } from './Label';
import { Mesher } from './Mesher';
import { ReferResourceCreate } from './ReferResourceCreate';
import { RuntimeStack } from './RuntimeStack';
import { SourceObject } from './SourceObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentInfoResponse extends SdkResponse {
    public name?: string;
    public description?: string;
    public labels?: Array<Label>;
    private 'runtime_stack'?: RuntimeStack;
    public source?: SourceObject;
    public build?: Build;
    private 'environment_id'?: string;
    private 'application_id'?: string;
    private 'limit_cpu'?: number;
    private 'limit_memory'?: number;
    private 'request_cpu'?: number;
    private 'request_memory'?: number;
    public replica?: number;
    public version?: string;
    public envs?: Array<ComponentEnvironment>;
    public storages?: Array<ComponentStorage>;
    public command?: ComponentCommand;
    private 'post_start'?: ComponentLifecycle;
    private 'pre_stop'?: ComponentLifecycle;
    public timezone?: string;
    public mesher?: Mesher;
    private 'deploy_strategy'?: DeployStrategy;
    private 'jvm_opts'?: string;
    private 'tomcat_opts'?: ComponentInfoTomcatOpts;
    public logs?: Array<ComponentLogs>;
    private 'custom_metric'?: ComponentInfoCustomMetric;
    public affinity?: ComponentAffinity;
    private 'anti_affinity'?: ComponentAffinity;
    private 'liveness_probe'?: ComponentProbe;
    private 'readiness_probe'?: ComponentProbe;
    private 'refer_resources'?: Array<ReferResourceCreate>;
    public status?: ComponentStatusView;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowComponentInfoResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowComponentInfoResponse {
        this['description'] = description;
        return this;
    }
    public withLabels(labels: Array<Label>): ShowComponentInfoResponse {
        this['labels'] = labels;
        return this;
    }
    public withRuntimeStack(runtimeStack: RuntimeStack): ShowComponentInfoResponse {
        this['runtime_stack'] = runtimeStack;
        return this;
    }
    public set runtimeStack(runtimeStack: RuntimeStack  | undefined) {
        this['runtime_stack'] = runtimeStack;
    }
    public get runtimeStack(): RuntimeStack | undefined {
        return this['runtime_stack'];
    }
    public withSource(source: SourceObject): ShowComponentInfoResponse {
        this['source'] = source;
        return this;
    }
    public withBuild(build: Build): ShowComponentInfoResponse {
        this['build'] = build;
        return this;
    }
    public withEnvironmentId(environmentId: string): ShowComponentInfoResponse {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withApplicationId(applicationId: string): ShowComponentInfoResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withLimitCpu(limitCpu: number): ShowComponentInfoResponse {
        this['limit_cpu'] = limitCpu;
        return this;
    }
    public set limitCpu(limitCpu: number  | undefined) {
        this['limit_cpu'] = limitCpu;
    }
    public get limitCpu(): number | undefined {
        return this['limit_cpu'];
    }
    public withLimitMemory(limitMemory: number): ShowComponentInfoResponse {
        this['limit_memory'] = limitMemory;
        return this;
    }
    public set limitMemory(limitMemory: number  | undefined) {
        this['limit_memory'] = limitMemory;
    }
    public get limitMemory(): number | undefined {
        return this['limit_memory'];
    }
    public withRequestCpu(requestCpu: number): ShowComponentInfoResponse {
        this['request_cpu'] = requestCpu;
        return this;
    }
    public set requestCpu(requestCpu: number  | undefined) {
        this['request_cpu'] = requestCpu;
    }
    public get requestCpu(): number | undefined {
        return this['request_cpu'];
    }
    public withRequestMemory(requestMemory: number): ShowComponentInfoResponse {
        this['request_memory'] = requestMemory;
        return this;
    }
    public set requestMemory(requestMemory: number  | undefined) {
        this['request_memory'] = requestMemory;
    }
    public get requestMemory(): number | undefined {
        return this['request_memory'];
    }
    public withReplica(replica: number): ShowComponentInfoResponse {
        this['replica'] = replica;
        return this;
    }
    public withVersion(version: string): ShowComponentInfoResponse {
        this['version'] = version;
        return this;
    }
    public withEnvs(envs: Array<ComponentEnvironment>): ShowComponentInfoResponse {
        this['envs'] = envs;
        return this;
    }
    public withStorages(storages: Array<ComponentStorage>): ShowComponentInfoResponse {
        this['storages'] = storages;
        return this;
    }
    public withCommand(command: ComponentCommand): ShowComponentInfoResponse {
        this['command'] = command;
        return this;
    }
    public withPostStart(postStart: ComponentLifecycle): ShowComponentInfoResponse {
        this['post_start'] = postStart;
        return this;
    }
    public set postStart(postStart: ComponentLifecycle  | undefined) {
        this['post_start'] = postStart;
    }
    public get postStart(): ComponentLifecycle | undefined {
        return this['post_start'];
    }
    public withPreStop(preStop: ComponentLifecycle): ShowComponentInfoResponse {
        this['pre_stop'] = preStop;
        return this;
    }
    public set preStop(preStop: ComponentLifecycle  | undefined) {
        this['pre_stop'] = preStop;
    }
    public get preStop(): ComponentLifecycle | undefined {
        return this['pre_stop'];
    }
    public withTimezone(timezone: string): ShowComponentInfoResponse {
        this['timezone'] = timezone;
        return this;
    }
    public withMesher(mesher: Mesher): ShowComponentInfoResponse {
        this['mesher'] = mesher;
        return this;
    }
    public withDeployStrategy(deployStrategy: DeployStrategy): ShowComponentInfoResponse {
        this['deploy_strategy'] = deployStrategy;
        return this;
    }
    public set deployStrategy(deployStrategy: DeployStrategy  | undefined) {
        this['deploy_strategy'] = deployStrategy;
    }
    public get deployStrategy(): DeployStrategy | undefined {
        return this['deploy_strategy'];
    }
    public withJvmOpts(jvmOpts: string): ShowComponentInfoResponse {
        this['jvm_opts'] = jvmOpts;
        return this;
    }
    public set jvmOpts(jvmOpts: string  | undefined) {
        this['jvm_opts'] = jvmOpts;
    }
    public get jvmOpts(): string | undefined {
        return this['jvm_opts'];
    }
    public withTomcatOpts(tomcatOpts: ComponentInfoTomcatOpts): ShowComponentInfoResponse {
        this['tomcat_opts'] = tomcatOpts;
        return this;
    }
    public set tomcatOpts(tomcatOpts: ComponentInfoTomcatOpts  | undefined) {
        this['tomcat_opts'] = tomcatOpts;
    }
    public get tomcatOpts(): ComponentInfoTomcatOpts | undefined {
        return this['tomcat_opts'];
    }
    public withLogs(logs: Array<ComponentLogs>): ShowComponentInfoResponse {
        this['logs'] = logs;
        return this;
    }
    public withCustomMetric(customMetric: ComponentInfoCustomMetric): ShowComponentInfoResponse {
        this['custom_metric'] = customMetric;
        return this;
    }
    public set customMetric(customMetric: ComponentInfoCustomMetric  | undefined) {
        this['custom_metric'] = customMetric;
    }
    public get customMetric(): ComponentInfoCustomMetric | undefined {
        return this['custom_metric'];
    }
    public withAffinity(affinity: ComponentAffinity): ShowComponentInfoResponse {
        this['affinity'] = affinity;
        return this;
    }
    public withAntiAffinity(antiAffinity: ComponentAffinity): ShowComponentInfoResponse {
        this['anti_affinity'] = antiAffinity;
        return this;
    }
    public set antiAffinity(antiAffinity: ComponentAffinity  | undefined) {
        this['anti_affinity'] = antiAffinity;
    }
    public get antiAffinity(): ComponentAffinity | undefined {
        return this['anti_affinity'];
    }
    public withLivenessProbe(livenessProbe: ComponentProbe): ShowComponentInfoResponse {
        this['liveness_probe'] = livenessProbe;
        return this;
    }
    public set livenessProbe(livenessProbe: ComponentProbe  | undefined) {
        this['liveness_probe'] = livenessProbe;
    }
    public get livenessProbe(): ComponentProbe | undefined {
        return this['liveness_probe'];
    }
    public withReadinessProbe(readinessProbe: ComponentProbe): ShowComponentInfoResponse {
        this['readiness_probe'] = readinessProbe;
        return this;
    }
    public set readinessProbe(readinessProbe: ComponentProbe  | undefined) {
        this['readiness_probe'] = readinessProbe;
    }
    public get readinessProbe(): ComponentProbe | undefined {
        return this['readiness_probe'];
    }
    public withReferResources(referResources: Array<ReferResourceCreate>): ShowComponentInfoResponse {
        this['refer_resources'] = referResources;
        return this;
    }
    public set referResources(referResources: Array<ReferResourceCreate>  | undefined) {
        this['refer_resources'] = referResources;
    }
    public get referResources(): Array<ReferResourceCreate> | undefined {
        return this['refer_resources'];
    }
    public withStatus(status: ComponentStatusView): ShowComponentInfoResponse {
        this['status'] = status;
        return this;
    }
}