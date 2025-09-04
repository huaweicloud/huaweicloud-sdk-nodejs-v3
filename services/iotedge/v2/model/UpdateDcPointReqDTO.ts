import { ProcessingConfigDTO } from './ProcessingConfigDTO';


export class UpdateDcPointReqDTO {
    public name?: string;
    private 'collection_config'?: object;
    private 'device_id'?: string;
    public property?: string;
    private 'data_type'?: string;
    private 'processing_config'?: ProcessingConfigDTO;
    public constructor(deviceId?: string, property?: string) { 
        this['device_id'] = deviceId;
        this['property'] = property;
    }
    public withName(name: string): UpdateDcPointReqDTO {
        this['name'] = name;
        return this;
    }
    public withCollectionConfig(collectionConfig: object): UpdateDcPointReqDTO {
        this['collection_config'] = collectionConfig;
        return this;
    }
    public set collectionConfig(collectionConfig: object  | undefined) {
        this['collection_config'] = collectionConfig;
    }
    public get collectionConfig(): object | undefined {
        return this['collection_config'];
    }
    public withDeviceId(deviceId: string): UpdateDcPointReqDTO {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withProperty(property: string): UpdateDcPointReqDTO {
        this['property'] = property;
        return this;
    }
    public withDataType(dataType: string): UpdateDcPointReqDTO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withProcessingConfig(processingConfig: ProcessingConfigDTO): UpdateDcPointReqDTO {
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