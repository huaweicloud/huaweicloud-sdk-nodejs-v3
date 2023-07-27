
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOrDeletePublishRecordForApiV2Response extends SdkResponse {
    private 'publish_id'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'env_id'?: string;
    public remark?: string;
    private 'publish_time'?: Date;
    private 'version_id'?: string;
    public constructor() { 
        super();
    }
    public withPublishId(publishId: string): CreateOrDeletePublishRecordForApiV2Response {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withApiId(apiId: string): CreateOrDeletePublishRecordForApiV2Response {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): CreateOrDeletePublishRecordForApiV2Response {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withEnvId(envId: string): CreateOrDeletePublishRecordForApiV2Response {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withRemark(remark: string): CreateOrDeletePublishRecordForApiV2Response {
        this['remark'] = remark;
        return this;
    }
    public withPublishTime(publishTime: Date): CreateOrDeletePublishRecordForApiV2Response {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: Date  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): Date | undefined {
        return this['publish_time'];
    }
    public withVersionId(versionId: string): CreateOrDeletePublishRecordForApiV2Response {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
}