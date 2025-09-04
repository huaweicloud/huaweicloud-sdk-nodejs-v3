import { ProcessingConfigDTO } from './ProcessingConfigDTO';


export class CreateDcPointRespDTO {
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
    }
    public withPointId(pointId: string): CreateDcPointRespDTO {
        this['point_id'] = pointId;
        return this;
    }
    public set pointId(pointId: string  | undefined) {
        this['point_id'] = pointId;
    }
    public get pointId(): string | undefined {
        return this['point_id'];
    }
    public withName(name: string): CreateDcPointRespDTO {
        this['name'] = name;
        return this;
    }
    public withCollectionConfig(collectionConfig: object): CreateDcPointRespDTO {
        this['collection_config'] = collectionConfig;
        return this;
    }
    public set collectionConfig(collectionConfig: object  | undefined) {
        this['collection_config'] = collectionConfig;
    }
    public get collectionConfig(): object | undefined {
        return this['collection_config'];
    }
    public withDeviceId(deviceId: string): CreateDcPointRespDTO {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withProperty(property: string): CreateDcPointRespDTO {
        this['property'] = property;
        return this;
    }
    public withDataType(dataType: string): CreateDcPointRespDTO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDsId(dsId: string): CreateDcPointRespDTO {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withProcessingConfig(processingConfig: ProcessingConfigDTO): CreateDcPointRespDTO {
        this['processing_config'] = processingConfig;
        return this;
    }
    public set processingConfig(processingConfig: ProcessingConfigDTO  | undefined) {
        this['processing_config'] = processingConfig;
    }
    public get processingConfig(): ProcessingConfigDTO | undefined {
        return this['processing_config'];
    }
    public withCreateTime(createTime: string): CreateDcPointRespDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateDcPointRespDTO {
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