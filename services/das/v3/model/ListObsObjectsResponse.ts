
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListObsObjectsResponse extends SdkResponse {
    private 'bucket_name'?: string;
    public marker?: string;
    private 'next_marker'?: string;
    private 'common_prefixes'?: Array<string>;
    public constructor() { 
        super();
    }
    public withBucketName(bucketName: string): ListObsObjectsResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withMarker(marker: string): ListObsObjectsResponse {
        this['marker'] = marker;
        return this;
    }
    public withNextMarker(nextMarker: string): ListObsObjectsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withCommonPrefixes(commonPrefixes: Array<string>): ListObsObjectsResponse {
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