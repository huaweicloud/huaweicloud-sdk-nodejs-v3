
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEdgeAppResponse extends SdkResponse {
    private 'edge_app_id'?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'last_published_version'?: string;
    private 'app_type'?: string;
    private 'function_type'?: string;
    private 'deploy_type'?: string;
    public protocol?: string;
    private 'edge_app_name'?: string;
    public constructor() { 
        super();
    }
    public withEdgeAppId(edgeAppId: string): CreateEdgeAppResponse {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withDescription(description: string): CreateEdgeAppResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): CreateEdgeAppResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateEdgeAppResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withLastPublishedVersion(lastPublishedVersion: string): CreateEdgeAppResponse {
        this['last_published_version'] = lastPublishedVersion;
        return this;
    }
    public set lastPublishedVersion(lastPublishedVersion: string  | undefined) {
        this['last_published_version'] = lastPublishedVersion;
    }
    public get lastPublishedVersion(): string | undefined {
        return this['last_published_version'];
    }
    public withAppType(appType: string): CreateEdgeAppResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withFunctionType(functionType: string): CreateEdgeAppResponse {
        this['function_type'] = functionType;
        return this;
    }
    public set functionType(functionType: string  | undefined) {
        this['function_type'] = functionType;
    }
    public get functionType(): string | undefined {
        return this['function_type'];
    }
    public withDeployType(deployType: string): CreateEdgeAppResponse {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withProtocol(protocol: string): CreateEdgeAppResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withEdgeAppName(edgeAppName: string): CreateEdgeAppResponse {
        this['edge_app_name'] = edgeAppName;
        return this;
    }
    public set edgeAppName(edgeAppName: string  | undefined) {
        this['edge_app_name'] = edgeAppName;
    }
    public get edgeAppName(): string | undefined {
        return this['edge_app_name'];
    }
}