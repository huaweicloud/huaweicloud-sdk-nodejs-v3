import { Content } from './Content';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetFileResponse extends SdkResponse {
    public contents?: Array<Content>;
    private 'is_truncated'?: boolean;
    public marker?: string;
    private 'next_marker'?: string;
    private 'max_keys'?: number;
    private 'bucket_name'?: string;
    public prefix?: string;
    private 'common_prefixes'?: Array<string>;
    public constructor() { 
        super();
    }
    public withContents(contents: Array<Content>): ListAssetFileResponse {
        this['contents'] = contents;
        return this;
    }
    public withIsTruncated(isTruncated: boolean): ListAssetFileResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: boolean  | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated(): boolean | undefined {
        return this['is_truncated'];
    }
    public withMarker(marker: string): ListAssetFileResponse {
        this['marker'] = marker;
        return this;
    }
    public withNextMarker(nextMarker: string): ListAssetFileResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withMaxKeys(maxKeys: number): ListAssetFileResponse {
        this['max_keys'] = maxKeys;
        return this;
    }
    public set maxKeys(maxKeys: number  | undefined) {
        this['max_keys'] = maxKeys;
    }
    public get maxKeys(): number | undefined {
        return this['max_keys'];
    }
    public withBucketName(bucketName: string): ListAssetFileResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withPrefix(prefix: string): ListAssetFileResponse {
        this['prefix'] = prefix;
        return this;
    }
    public withCommonPrefixes(commonPrefixes: Array<string>): ListAssetFileResponse {
        this['common_prefixes'] = commonPrefixes;
        return this;
    }
    public set commonPrefixes(commonPrefixes: Array<string>  | undefined) {
        this['common_prefixes'] = commonPrefixes;
    }
    public get commonPrefixes(): Array<string> | undefined {
        return this['common_prefixes'];
    }
}