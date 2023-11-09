import { ExternalAccesses } from './ExternalAccesses';
import { InstanceStatusView } from './InstanceStatusView';


export class InstanceListView {
    public id?: string;
    private 'application_id'?: string;
    private 'application_name'?: string;
    private 'component_id'?: string;
    private 'component_name'?: string;
    public name?: string;
    private 'environment_id'?: string;
    private 'environment_name'?: string;
    private 'platform_type'?: string;
    public version?: string;
    private 'external_accesses'?: Array<ExternalAccesses>;
    public artifacts?: { [key: string]: object; };
    public creator?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'status_detail'?: InstanceStatusView;
    public constructor() { 
    }
    public withId(id: string): InstanceListView {
        this['id'] = id;
        return this;
    }
    public withApplicationId(applicationId: string): InstanceListView {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withApplicationName(applicationName: string): InstanceListView {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withComponentId(componentId: string): InstanceListView {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withComponentName(componentName: string): InstanceListView {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withName(name: string): InstanceListView {
        this['name'] = name;
        return this;
    }
    public withEnvironmentId(environmentId: string): InstanceListView {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withEnvironmentName(environmentName: string): InstanceListView {
        this['environment_name'] = environmentName;
        return this;
    }
    public set environmentName(environmentName: string  | undefined) {
        this['environment_name'] = environmentName;
    }
    public get environmentName(): string | undefined {
        return this['environment_name'];
    }
    public withPlatformType(platformType: string): InstanceListView {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: string  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): string | undefined {
        return this['platform_type'];
    }
    public withVersion(version: string): InstanceListView {
        this['version'] = version;
        return this;
    }
    public withExternalAccesses(externalAccesses: Array<ExternalAccesses>): InstanceListView {
        this['external_accesses'] = externalAccesses;
        return this;
    }
    public set externalAccesses(externalAccesses: Array<ExternalAccesses>  | undefined) {
        this['external_accesses'] = externalAccesses;
    }
    public get externalAccesses(): Array<ExternalAccesses> | undefined {
        return this['external_accesses'];
    }
    public withArtifacts(artifacts: { [key: string]: object; }): InstanceListView {
        this['artifacts'] = artifacts;
        return this;
    }
    public withCreator(creator: string): InstanceListView {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): InstanceListView {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): InstanceListView {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withStatusDetail(statusDetail: InstanceStatusView): InstanceListView {
        this['status_detail'] = statusDetail;
        return this;
    }
    public set statusDetail(statusDetail: InstanceStatusView  | undefined) {
        this['status_detail'] = statusDetail;
    }
    public get statusDetail(): InstanceStatusView | undefined {
        return this['status_detail'];
    }
}