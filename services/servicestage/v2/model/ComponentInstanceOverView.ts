import { ExternalAccesses } from './ExternalAccesses';
import { FlavorId } from './FlavorId';
import { InstancePlatformType } from './InstancePlatformType';
import { InstanceStatusView } from './InstanceStatusView';
import { ReferResources } from './ReferResources';


export class ComponentInstanceOverView {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public description?: string;
    private 'environment_id'?: string;
    private 'platform_type'?: InstancePlatformType;
    private 'flavor_id'?: FlavorId;
    public artifacts?: { [key: string]: object; };
    public version?: string;
    public configuration?: object;
    public creator?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'external_accesses'?: Array<ExternalAccesses>;
    private 'refer_resources'?: Array<ReferResources>;
    private 'status_detail'?: InstanceStatusView;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ComponentInstanceOverView {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ComponentInstanceOverView {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDescription(description: string): ComponentInstanceOverView {
        this['description'] = description;
        return this;
    }
    public withEnvironmentId(environmentId: string): ComponentInstanceOverView {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withPlatformType(platformType: InstancePlatformType): ComponentInstanceOverView {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: InstancePlatformType  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): InstancePlatformType | undefined {
        return this['platform_type'];
    }
    public withFlavorId(flavorId: FlavorId): ComponentInstanceOverView {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: FlavorId  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): FlavorId | undefined {
        return this['flavor_id'];
    }
    public withArtifacts(artifacts: { [key: string]: object; }): ComponentInstanceOverView {
        this['artifacts'] = artifacts;
        return this;
    }
    public withVersion(version: string): ComponentInstanceOverView {
        this['version'] = version;
        return this;
    }
    public withConfiguration(configuration: object): ComponentInstanceOverView {
        this['configuration'] = configuration;
        return this;
    }
    public withCreator(creator: string): ComponentInstanceOverView {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): ComponentInstanceOverView {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ComponentInstanceOverView {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withExternalAccesses(externalAccesses: Array<ExternalAccesses>): ComponentInstanceOverView {
        this['external_accesses'] = externalAccesses;
        return this;
    }
    public set externalAccesses(externalAccesses: Array<ExternalAccesses>  | undefined) {
        this['external_accesses'] = externalAccesses;
    }
    public get externalAccesses(): Array<ExternalAccesses> | undefined {
        return this['external_accesses'];
    }
    public withReferResources(referResources: Array<ReferResources>): ComponentInstanceOverView {
        this['refer_resources'] = referResources;
        return this;
    }
    public set referResources(referResources: Array<ReferResources>  | undefined) {
        this['refer_resources'] = referResources;
    }
    public get referResources(): Array<ReferResources> | undefined {
        return this['refer_resources'];
    }
    public withStatusDetail(statusDetail: InstanceStatusView): ComponentInstanceOverView {
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