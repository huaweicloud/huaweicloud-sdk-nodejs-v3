import { ObsObjectInfo } from './ObsObjectInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportExportObsObjectsResponse extends SdkResponse {
    private 'bucket_name'?: string;
    public marker?: string;
    private 'next_marker'?: string;
    public truncated?: boolean;
    private 'max_keys'?: number;
    public prefix?: string;
    private 'common_prefixes'?: Array<string>;
    public contents?: Array<ObsObjectInfo>;
    public constructor() { 
        super();
    }
    public withBucketName(bucketName: string): ImportExportObsObjectsResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withMarker(marker: string): ImportExportObsObjectsResponse {
        this['marker'] = marker;
        return this;
    }
    public withNextMarker(nextMarker: string): ImportExportObsObjectsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withTruncated(truncated: boolean): ImportExportObsObjectsResponse {
        this['truncated'] = truncated;
        return this;
    }
    public withMaxKeys(maxKeys: number): ImportExportObsObjectsResponse {
        this['max_keys'] = maxKeys;
        return this;
    }
    public set maxKeys(maxKeys: number  | undefined) {
        this['max_keys'] = maxKeys;
    }
    public get maxKeys(): number | undefined {
        return this['max_keys'];
    }
    public withPrefix(prefix: string): ImportExportObsObjectsResponse {
        this['prefix'] = prefix;
        return this;
    }
    public withCommonPrefixes(commonPrefixes: Array<string>): ImportExportObsObjectsResponse {
        this['common_prefixes'] = commonPrefixes;
        return this;
    }
    public set commonPrefixes(commonPrefixes: Array<string>  | undefined) {
        this['common_prefixes'] = commonPrefixes;
    }
    public get commonPrefixes(): Array<string> | undefined {
        return this['common_prefixes'];
    }
    public withContents(contents: Array<ObsObjectInfo>): ImportExportObsObjectsResponse {
        this['contents'] = contents;
        return this;
    }
}