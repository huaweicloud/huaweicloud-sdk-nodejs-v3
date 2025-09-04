
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEdgeApplicationVersionStateResponse extends SdkResponse {
    private 'edge_app_id'?: string;
    public name?: string;
    public version?: string;
    private 'sdk_version'?: string;
    public description?: string;
    private 'deploy_type'?: string;
    private 'deploy_multi_instance'?: boolean;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public state?: UpdateEdgeApplicationVersionStateResponseStateEnum | string;
    public arch?: Array<string>;
    private 'publish_time'?: string;
    private 'off_shelf_time'?: string;
    public constructor() { 
        super();
    }
    public withEdgeAppId(edgeAppId: string): UpdateEdgeApplicationVersionStateResponse {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withName(name: string): UpdateEdgeApplicationVersionStateResponse {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): UpdateEdgeApplicationVersionStateResponse {
        this['version'] = version;
        return this;
    }
    public withSdkVersion(sdkVersion: string): UpdateEdgeApplicationVersionStateResponse {
        this['sdk_version'] = sdkVersion;
        return this;
    }
    public set sdkVersion(sdkVersion: string  | undefined) {
        this['sdk_version'] = sdkVersion;
    }
    public get sdkVersion(): string | undefined {
        return this['sdk_version'];
    }
    public withDescription(description: string): UpdateEdgeApplicationVersionStateResponse {
        this['description'] = description;
        return this;
    }
    public withDeployType(deployType: string): UpdateEdgeApplicationVersionStateResponse {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withDeployMultiInstance(deployMultiInstance: boolean): UpdateEdgeApplicationVersionStateResponse {
        this['deploy_multi_instance'] = deployMultiInstance;
        return this;
    }
    public set deployMultiInstance(deployMultiInstance: boolean  | undefined) {
        this['deploy_multi_instance'] = deployMultiInstance;
    }
    public get deployMultiInstance(): boolean | undefined {
        return this['deploy_multi_instance'];
    }
    public withCreateTime(createTime: string): UpdateEdgeApplicationVersionStateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateEdgeApplicationVersionStateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withState(state: UpdateEdgeApplicationVersionStateResponseStateEnum | string): UpdateEdgeApplicationVersionStateResponse {
        this['state'] = state;
        return this;
    }
    public withArch(arch: Array<string>): UpdateEdgeApplicationVersionStateResponse {
        this['arch'] = arch;
        return this;
    }
    public withPublishTime(publishTime: string): UpdateEdgeApplicationVersionStateResponse {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withOffShelfTime(offShelfTime: string): UpdateEdgeApplicationVersionStateResponse {
        this['off_shelf_time'] = offShelfTime;
        return this;
    }
    public set offShelfTime(offShelfTime: string  | undefined) {
        this['off_shelf_time'] = offShelfTime;
    }
    public get offShelfTime(): string | undefined {
        return this['off_shelf_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEdgeApplicationVersionStateResponseStateEnum {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
    OFF_SHELF = 'OFF_SHELF'
}
