import { ExternalAccesses } from './ExternalAccesses';
import { FlavorId } from './FlavorId';
import { InstancePlatformType } from './InstancePlatformType';
import { InstanceStatusView } from './InstanceStatusView';
import { ReferResources } from './ReferResources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
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
        super();
    }
    public withId(id: string): ShowInstanceDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowInstanceDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowInstanceDetailResponse {
        this['description'] = description;
        return this;
    }
    public withEnvironmentId(environmentId: string): ShowInstanceDetailResponse {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withPlatformType(platformType: InstancePlatformType): ShowInstanceDetailResponse {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: InstancePlatformType  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): InstancePlatformType | undefined {
        return this['platform_type'];
    }
    public withFlavorId(flavorId: FlavorId): ShowInstanceDetailResponse {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: FlavorId  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): FlavorId | undefined {
        return this['flavor_id'];
    }
    public withArtifacts(artifacts: { [key: string]: object; }): ShowInstanceDetailResponse {
        this['artifacts'] = artifacts;
        return this;
    }
    public withVersion(version: string): ShowInstanceDetailResponse {
        this['version'] = version;
        return this;
    }
    public withConfiguration(configuration: object): ShowInstanceDetailResponse {
        this['configuration'] = configuration;
        return this;
    }
    public withCreator(creator: string): ShowInstanceDetailResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): ShowInstanceDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowInstanceDetailResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withExternalAccesses(externalAccesses: Array<ExternalAccesses>): ShowInstanceDetailResponse {
        this['external_accesses'] = externalAccesses;
        return this;
    }
    public set externalAccesses(externalAccesses: Array<ExternalAccesses>  | undefined) {
        this['external_accesses'] = externalAccesses;
    }
    public get externalAccesses(): Array<ExternalAccesses> | undefined {
        return this['external_accesses'];
    }
    public withReferResources(referResources: Array<ReferResources>): ShowInstanceDetailResponse {
        this['refer_resources'] = referResources;
        return this;
    }
    public set referResources(referResources: Array<ReferResources>  | undefined) {
        this['refer_resources'] = referResources;
    }
    public get referResources(): Array<ReferResources> | undefined {
        return this['refer_resources'];
    }
    public withStatusDetail(statusDetail: InstanceStatusView): ShowInstanceDetailResponse {
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