import { ProcessingConfigDTO } from './ProcessingConfigDTO';


export class CreateDcPointReqDTO {
    private 'point_id'?: string;
    public name?: string;
    private 'data_type'?: string;
    private 'collection_config'?: object;
    private 'device_id'?: string;
    public property?: string;
    private 'processing_config'?: ProcessingConfigDTO;
    public constructor(pointId?: string, name?: string, collectionConfig?: object, deviceId?: string, property?: string) { 
        this['point_id'] = pointId;
        this['name'] = name;
        this['collection_config'] = collectionConfig;
        this['device_id'] = deviceId;
        this['property'] = property;
    }
    public withPointId(pointId: string): CreateDcPointReqDTO {
        this['point_id'] = pointId;
        return this;
    }
    public set pointId(pointId: string  | undefined) {
        this['point_id'] = pointId;
    }
    public get pointId(): string | undefined {
        return this['point_id'];
    }
    public withName(name: string): CreateDcPointReqDTO {
        this['name'] = name;
        return this;
    }
    public withDataType(dataType: string): CreateDcPointReqDTO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withCollectionConfig(collectionConfig: object): CreateDcPointReqDTO {
        this['collection_config'] = collectionConfig;
        return this;
    }
    public set collectionConfig(collectionConfig: object  | undefined) {
        this['collection_config'] = collectionConfig;
    }
    public get collectionConfig(): object | undefined {
        return this['collection_config'];
    }
    public withDeviceId(deviceId: string): CreateDcPointReqDTO {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withProperty(property: string): CreateDcPointReqDTO {
        this['property'] = property;
        return this;
    }
    public withProcessingConfig(processingConfig: ProcessingConfigDTO): CreateDcPointReqDTO {
        this['processing_config'] = processingConfig;
        return this;
    }
    public set processingConfig(processingConfig: ProcessingConfigDTO  | undefined) {
        this['processing_config'] = processingConfig;
    }
    public get processingConfig(): ProcessingConfigDTO | undefined {
        return this['processing_config'];
    }
}