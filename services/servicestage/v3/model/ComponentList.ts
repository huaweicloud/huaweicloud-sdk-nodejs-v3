import { ComponentStatusView } from './ComponentStatusView';
import { ExternalAccesses } from './ExternalAccesses';
import { Label } from './Label';
import { RuntimeStack } from './RuntimeStack';
import { SourceObject } from './SourceObject';


export class ComponentList {
    public name?: string;
    public labels?: Array<Label>;
    private 'runtime_stack'?: RuntimeStack;
    public status?: ComponentStatusView;
    private 'environment_name'?: string;
    private 'application_name'?: string;
    private 'environment_id'?: string;
    private 'application_id'?: string;
    public id?: string;
    public creator?: string;
    public source?: SourceObject;
    public version?: string;
    private 'platform_type'?: string;
    private 'external_accesses'?: Array<ExternalAccesses>;
    public constructor(name?: string, source?: SourceObject) { 
        this['name'] = name;
        this['source'] = source;
    }
    public withName(name: string): ComponentList {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: Array<Label>): ComponentList {
        this['labels'] = labels;
        return this;
    }
    public withRuntimeStack(runtimeStack: RuntimeStack): ComponentList {
        this['runtime_stack'] = runtimeStack;
        return this;
    }
    public set runtimeStack(runtimeStack: RuntimeStack  | undefined) {
        this['runtime_stack'] = runtimeStack;
    }
    public get runtimeStack(): RuntimeStack | undefined {
        return this['runtime_stack'];
    }
    public withStatus(status: ComponentStatusView): ComponentList {
        this['status'] = status;
        return this;
    }
    public withEnvironmentName(environmentName: string): ComponentList {
        this['environment_name'] = environmentName;
        return this;
    }
    public set environmentName(environmentName: string  | undefined) {
        this['environment_name'] = environmentName;
    }
    public get environmentName(): string | undefined {
        return this['environment_name'];
    }
    public withApplicationName(applicationName: string): ComponentList {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withEnvironmentId(environmentId: string): ComponentList {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withApplicationId(applicationId: string): ComponentList {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withId(id: string): ComponentList {
        this['id'] = id;
        return this;
    }
    public withCreator(creator: string): ComponentList {
        this['creator'] = creator;
        return this;
    }
    public withSource(source: SourceObject): ComponentList {
        this['source'] = source;
        return this;
    }
    public withVersion(version: string): ComponentList {
        this['version'] = version;
        return this;
    }
    public withPlatformType(platformType: string): ComponentList {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: string  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): string | undefined {
        return this['platform_type'];
    }
    public withExternalAccesses(externalAccesses: Array<ExternalAccesses>): ComponentList {
        this['external_accesses'] = externalAccesses;
        return this;
    }
    public set externalAccesses(externalAccesses: Array<ExternalAccesses>  | undefined) {
        this['external_accesses'] = externalAccesses;
    }
    public get externalAccesses(): Array<ExternalAccesses> | undefined {
        return this['external_accesses'];
    }
}