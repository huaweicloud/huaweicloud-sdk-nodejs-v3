import { Build } from './Build';
import { ComponentAffinity } from './ComponentAffinity';
import { ComponentCommand } from './ComponentCommand';
import { ComponentEnvironment } from './ComponentEnvironment';
import { ComponentLifecycle } from './ComponentLifecycle';
import { ComponentLogs } from './ComponentLogs';
import { ComponentModifyCustomMetric } from './ComponentModifyCustomMetric';
import { ComponentModifyTomcatOpts } from './ComponentModifyTomcatOpts';
import { ComponentProbe } from './ComponentProbe';
import { ComponentStorage } from './ComponentStorage';
import { DeployStrategy } from './DeployStrategy';
import { ExternalAccesses } from './ExternalAccesses';
import { Label } from './Label';
import { Mesher } from './Mesher';
import { ReferResourceCreate } from './ReferResourceCreate';
import { RuntimeStack } from './RuntimeStack';
import { SourceObject } from './SourceObject';


export class ComponentModify {
    public name?: string;
    public description?: string;
    public labels?: Array<Label>;
    private 'runtime_stack'?: RuntimeStack;
    public source?: SourceObject;
    public build?: Build;
    private 'limit_cpu'?: number;
    private 'limit_memory'?: number;
    private 'request_cpu'?: number;
    private 'request_memory'?: number;
    public replica?: number;
    public version?: string;
    public envs?: Array<ComponentEnvironment>;
    public storages?: Array<ComponentStorage>;
    private 'deploy_strategy'?: DeployStrategy;
    public command?: ComponentCommand;
    private 'post_start'?: ComponentLifecycle;
    private 'pre_stop'?: ComponentLifecycle;
    public timezone?: string;
    public mesher?: Mesher;
    private 'jvm_opts'?: string;
    private 'tomcat_opts'?: ComponentModifyTomcatOpts;
    public logs?: Array<ComponentLogs>;
    private 'custom_metric'?: ComponentModifyCustomMetric;
    public affinity?: ComponentAffinity;
    private 'anti_affinity'?: ComponentAffinity;
    private 'liveness_probe'?: ComponentProbe;
    private 'readiness_probe'?: ComponentProbe;
    private 'external_accesses'?: Array<ExternalAccesses>;
    private 'refer_resources'?: Array<ReferResourceCreate>;
    public constructor(name?: string, runtimeStack?: RuntimeStack, source?: SourceObject, replica?: number, version?: string) { 
        this['name'] = name;
        this['runtime_stack'] = runtimeStack;
        this['source'] = source;
        this['replica'] = replica;
        this['version'] = version;
    }
    public withName(name: string): ComponentModify {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ComponentModify {
        this['description'] = description;
        return this;
    }
    public withLabels(labels: Array<Label>): ComponentModify {
        this['labels'] = labels;
        return this;
    }
    public withRuntimeStack(runtimeStack: RuntimeStack): ComponentModify {
        this['runtime_stack'] = runtimeStack;
        return this;
    }
    public set runtimeStack(runtimeStack: RuntimeStack  | undefined) {
        this['runtime_stack'] = runtimeStack;
    }
    public get runtimeStack(): RuntimeStack | undefined {
        return this['runtime_stack'];
    }
    public withSource(source: SourceObject): ComponentModify {
        this['source'] = source;
        return this;
    }
    public withBuild(build: Build): ComponentModify {
        this['build'] = build;
        return this;
    }
    public withLimitCpu(limitCpu: number): ComponentModify {
        this['limit_cpu'] = limitCpu;
        return this;
    }
    public set limitCpu(limitCpu: number  | undefined) {
        this['limit_cpu'] = limitCpu;
    }
    public get limitCpu(): number | undefined {
        return this['limit_cpu'];
    }
    public withLimitMemory(limitMemory: number): ComponentModify {
        this['limit_memory'] = limitMemory;
        return this;
    }
    public set limitMemory(limitMemory: number  | undefined) {
        this['limit_memory'] = limitMemory;
    }
    public get limitMemory(): number | undefined {
        return this['limit_memory'];
    }
    public withRequestCpu(requestCpu: number): ComponentModify {
        this['request_cpu'] = requestCpu;
        return this;
    }
    public set requestCpu(requestCpu: number  | undefined) {
        this['request_cpu'] = requestCpu;
    }
    public get requestCpu(): number | undefined {
        return this['request_cpu'];
    }
    public withRequestMemory(requestMemory: number): ComponentModify {
        this['request_memory'] = requestMemory;
        return this;
    }
    public set requestMemory(requestMemory: number  | undefined) {
        this['request_memory'] = requestMemory;
    }
    public get requestMemory(): number | undefined {
        return this['request_memory'];
    }
    public withReplica(replica: number): ComponentModify {
        this['replica'] = replica;
        return this;
    }
    public withVersion(version: string): ComponentModify {
        this['version'] = version;
        return this;
    }
    public withEnvs(envs: Array<ComponentEnvironment>): ComponentModify {
        this['envs'] = envs;
        return this;
    }
    public withStorages(storages: Array<ComponentStorage>): ComponentModify {
        this['storages'] = storages;
        return this;
    }
    public withDeployStrategy(deployStrategy: DeployStrategy): ComponentModify {
        this['deploy_strategy'] = deployStrategy;
        return this;
    }
    public set deployStrategy(deployStrategy: DeployStrategy  | undefined) {
        this['deploy_strategy'] = deployStrategy;
    }
    public get deployStrategy(): DeployStrategy | undefined {
        return this['deploy_strategy'];
    }
    public withCommand(command: ComponentCommand): ComponentModify {
        this['command'] = command;
        return this;
    }
    public withPostStart(postStart: ComponentLifecycle): ComponentModify {
        this['post_start'] = postStart;
        return this;
    }
    public set postStart(postStart: ComponentLifecycle  | undefined) {
        this['post_start'] = postStart;
    }
    public get postStart(): ComponentLifecycle | undefined {
        return this['post_start'];
    }
    public withPreStop(preStop: ComponentLifecycle): ComponentModify {
        this['pre_stop'] = preStop;
        return this;
    }
    public set preStop(preStop: ComponentLifecycle  | undefined) {
        this['pre_stop'] = preStop;
    }
    public get preStop(): ComponentLifecycle | undefined {
        return this['pre_stop'];
    }
    public withTimezone(timezone: string): ComponentModify {
        this['timezone'] = timezone;
        return this;
    }
    public withMesher(mesher: Mesher): ComponentModify {
        this['mesher'] = mesher;
        return this;
    }
    public withJvmOpts(jvmOpts: string): ComponentModify {
        this['jvm_opts'] = jvmOpts;
        return this;
    }
    public set jvmOpts(jvmOpts: string  | undefined) {
        this['jvm_opts'] = jvmOpts;
    }
    public get jvmOpts(): string | undefined {
        return this['jvm_opts'];
    }
    public withTomcatOpts(tomcatOpts: ComponentModifyTomcatOpts): ComponentModify {
        this['tomcat_opts'] = tomcatOpts;
        return this;
    }
    public set tomcatOpts(tomcatOpts: ComponentModifyTomcatOpts  | undefined) {
        this['tomcat_opts'] = tomcatOpts;
    }
    public get tomcatOpts(): ComponentModifyTomcatOpts | undefined {
        return this['tomcat_opts'];
    }
    public withLogs(logs: Array<ComponentLogs>): ComponentModify {
        this['logs'] = logs;
        return this;
    }
    public withCustomMetric(customMetric: ComponentModifyCustomMetric): ComponentModify {
        this['custom_metric'] = customMetric;
        return this;
    }
    public set customMetric(customMetric: ComponentModifyCustomMetric  | undefined) {
        this['custom_metric'] = customMetric;
    }
    public get customMetric(): ComponentModifyCustomMetric | undefined {
        return this['custom_metric'];
    }
    public withAffinity(affinity: ComponentAffinity): ComponentModify {
        this['affinity'] = affinity;
        return this;
    }
    public withAntiAffinity(antiAffinity: ComponentAffinity): ComponentModify {
        this['anti_affinity'] = antiAffinity;
        return this;
    }
    public set antiAffinity(antiAffinity: ComponentAffinity  | undefined) {
        this['anti_affinity'] = antiAffinity;
    }
    public get antiAffinity(): ComponentAffinity | undefined {
        return this['anti_affinity'];
    }
    public withLivenessProbe(livenessProbe: ComponentProbe): ComponentModify {
        this['liveness_probe'] = livenessProbe;
        return this;
    }
    public set livenessProbe(livenessProbe: ComponentProbe  | undefined) {
        this['liveness_probe'] = livenessProbe;
    }
    public get livenessProbe(): ComponentProbe | undefined {
        return this['liveness_probe'];
    }
    public withReadinessProbe(readinessProbe: ComponentProbe): ComponentModify {
        this['readiness_probe'] = readinessProbe;
        return this;
    }
    public set readinessProbe(readinessProbe: ComponentProbe  | undefined) {
        this['readiness_probe'] = readinessProbe;
    }
    public get readinessProbe(): ComponentProbe | undefined {
        return this['readiness_probe'];
    }
    public withExternalAccesses(externalAccesses: Array<ExternalAccesses>): ComponentModify {
        this['external_accesses'] = externalAccesses;
        return this;
    }
    public set externalAccesses(externalAccesses: Array<ExternalAccesses>  | undefined) {
        this['external_accesses'] = externalAccesses;
    }
    public get externalAccesses(): Array<ExternalAccesses> | undefined {
        return this['external_accesses'];
    }
    public withReferResources(referResources: Array<ReferResourceCreate>): ComponentModify {
        this['refer_resources'] = referResources;
        return this;
    }
    public set referResources(referResources: Array<ReferResourceCreate>  | undefined) {
        this['refer_resources'] = referResources;
    }
    public get referResources(): Array<ReferResourceCreate> | undefined {
        return this['refer_resources'];
    }
}