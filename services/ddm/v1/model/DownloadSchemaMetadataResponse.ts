import { DnInstanceInfo } from './DnInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadSchemaMetadataResponse extends SdkResponse {
    private 'compressed_databases_info'?: string;
    private 'data_nodes'?: Array<DnInstanceInfo>;
    public constructor() { 
        super();
    }
    public withCompressedDatabasesInfo(compressedDatabasesInfo: string): DownloadSchemaMetadataResponse {
        this['compressed_databases_info'] = compressedDatabasesInfo;
        return this;
    }
    public set compressedDatabasesInfo(compressedDatabasesInfo: string  | undefined) {
        this['compressed_databases_info'] = compressedDatabasesInfo;
    }
    public get compressedDatabasesInfo(): string | undefined {
        return this['compressed_databases_info'];
    }
    public withDataNodes(dataNodes: Array<DnInstanceInfo>): DownloadSchemaMetadataResponse {
        this['data_nodes'] = dataNodes;
        return this;
    }
    public set dataNodes(dataNodes: Array<DnInstanceInfo>  | undefined) {
        this['data_nodes'] = dataNodes;
    }
    public get dataNodes(): Array<DnInstanceInfo> | undefined {
        return this['data_nodes'];
    }
}