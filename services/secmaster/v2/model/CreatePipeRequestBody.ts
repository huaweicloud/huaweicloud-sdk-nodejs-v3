import { KeyIndex } from './KeyIndex';


export class CreatePipeRequestBody {
    private 'dataspace_id'?: string;
    private 'pipe_name'?: string;
    public description?: string;
    private 'storage_period'?: number;
    public shards?: number;
    private 'timestamp_field'?: string;
    public mapping?: { [key: string]: KeyIndex; };
    public constructor(dataspaceId?: string, pipeName?: string, storagePeriod?: number, shards?: number) { 
        this['dataspace_id'] = dataspaceId;
        this['pipe_name'] = pipeName;
        this['storage_period'] = storagePeriod;
        this['shards'] = shards;
    }
    public withDataspaceId(dataspaceId: string): CreatePipeRequestBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withPipeName(pipeName: string): CreatePipeRequestBody {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withDescription(description: string): CreatePipeRequestBody {
        this['description'] = description;
        return this;
    }
    public withStoragePeriod(storagePeriod: number): CreatePipeRequestBody {
        this['storage_period'] = storagePeriod;
        return this;
    }
    public set storagePeriod(storagePeriod: number  | undefined) {
        this['storage_period'] = storagePeriod;
    }
    public get storagePeriod(): number | undefined {
        return this['storage_period'];
    }
    public withShards(shards: number): CreatePipeRequestBody {
        this['shards'] = shards;
        return this;
    }
    public withTimestampField(timestampField: string): CreatePipeRequestBody {
        this['timestamp_field'] = timestampField;
        return this;
    }
    public set timestampField(timestampField: string  | undefined) {
        this['timestamp_field'] = timestampField;
    }
    public get timestampField(): string | undefined {
        return this['timestamp_field'];
    }
    public withMapping(mapping: { [key: string]: KeyIndex; }): CreatePipeRequestBody {
        this['mapping'] = mapping;
        return this;
    }
}