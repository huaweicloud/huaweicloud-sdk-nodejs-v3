import { DNInstance } from './DNInstance';


export class LoadSchemaMetadataReq {
    private 'compressed_databases_info'?: string;
    private 'dn_instance'?: Array<DNInstance>;
    public constructor(compressedDatabasesInfo?: string, dnInstance?: Array<DNInstance>) { 
        this['compressed_databases_info'] = compressedDatabasesInfo;
        this['dn_instance'] = dnInstance;
    }
    public withCompressedDatabasesInfo(compressedDatabasesInfo: string): LoadSchemaMetadataReq {
        this['compressed_databases_info'] = compressedDatabasesInfo;
        return this;
    }
    public set compressedDatabasesInfo(compressedDatabasesInfo: string  | undefined) {
        this['compressed_databases_info'] = compressedDatabasesInfo;
    }
    public get compressedDatabasesInfo(): string | undefined {
        return this['compressed_databases_info'];
    }
    public withDnInstance(dnInstance: Array<DNInstance>): LoadSchemaMetadataReq {
        this['dn_instance'] = dnInstance;
        return this;
    }
    public set dnInstance(dnInstance: Array<DNInstance>  | undefined) {
        this['dn_instance'] = dnInstance;
    }
    public get dnInstance(): Array<DNInstance> | undefined {
        return this['dn_instance'];
    }
}