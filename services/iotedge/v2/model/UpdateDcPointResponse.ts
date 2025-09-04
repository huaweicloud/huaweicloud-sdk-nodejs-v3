import { ProcessingConfigDTO } from './ProcessingConfigDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDcPointResponse extends SdkResponse {
    private 'point_id'?: string;
    public name?: string;
    private 'collection_config'?: object;
    private 'device_id'?: string;
    public property?: string;
    private 'data_type'?: string;
    private 'ds_id'?: string;
    private 'processing_config'?: ProcessingConfigDTO;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withPointId(pointId: string): UpdateDcPointResponse {
        this['point_id'] = pointId;
        return this;
    }
    public set pointId(pointId: string  | undefined) {
        this['point_id'] = pointId;
    }
    public get pointId(): string | undefined {
        return this['point_id'];
    }
    public withName(name: string): UpdateDcPointResponse {
        this['name'] = name;
        return this;
    }
    public withCollectionConfig(collectionConfig: object): UpdateDcPointResponse {
        this['collection_config'] = collectionConfig;
        return this;
    }
    public set collectionConfig(collectionConfig: object  | undefined) {
        this['collection_config'] = collectionConfig;
    }
    public get collectionConfig(): object | undefined {
        return this['collection_config'];
    }
    public withDeviceId(deviceId: string): UpdateDcPointResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withProperty(property: string): UpdateDcPointResponse {
        this['property'] = property;
        return this;
    }
    public withDataType(dataType: string): UpdateDcPointResponse {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDsId(dsId: string): UpdateDcPointResponse {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withProcessingConfig(processingConfig: ProcessingConfigDTO): UpdateDcPointResponse {
        this['processing_config'] = processingConfig;
        return this;
    }
    public set processingConfig(processingConfig: ProcessingConfigDTO  | undefined) {
        this['processing_config'] = processingConfig;
    }
    public get processingConfig(): ProcessingConfigDTO | undefined {
        return this['processing_config'];
    }
    public withCreateTime(createTime: string): UpdateDcPointResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateDcPointResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}