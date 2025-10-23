import { PrefixKeyInfo } from './PrefixKeyInfo';
import { SourceCdnReq } from './SourceCdnReq';


export class ShowCdnInfoReq {
    public ak?: string;
    public sk?: string;
    private 'connection_string'?: string;
    private 'cloud_type'?: string;
    public region?: string;
    private 'app_id'?: string;
    public bucket?: string;
    public prefix?: PrefixKeyInfo;
    private 'source_cdn'?: SourceCdnReq;
    public constructor(ak?: string, sk?: string, cloudType?: string, region?: string, bucket?: string, sourceCdn?: SourceCdnReq) { 
        this['ak'] = ak;
        this['sk'] = sk;
        this['cloud_type'] = cloudType;
        this['region'] = region;
        this['bucket'] = bucket;
        this['source_cdn'] = sourceCdn;
    }
    public withAk(ak: string): ShowCdnInfoReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): ShowCdnInfoReq {
        this['sk'] = sk;
        return this;
    }
    public withConnectionString(connectionString: string): ShowCdnInfoReq {
        this['connection_string'] = connectionString;
        return this;
    }
    public set connectionString(connectionString: string  | undefined) {
        this['connection_string'] = connectionString;
    }
    public get connectionString(): string | undefined {
        return this['connection_string'];
    }
    public withCloudType(cloudType: string): ShowCdnInfoReq {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withRegion(region: string): ShowCdnInfoReq {
        this['region'] = region;
        return this;
    }
    public withAppId(appId: string): ShowCdnInfoReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBucket(bucket: string): ShowCdnInfoReq {
        this['bucket'] = bucket;
        return this;
    }
    public withPrefix(prefix: PrefixKeyInfo): ShowCdnInfoReq {
        this['prefix'] = prefix;
        return this;
    }
    public withSourceCdn(sourceCdn: SourceCdnReq): ShowCdnInfoReq {
        this['source_cdn'] = sourceCdn;
        return this;
    }
    public set sourceCdn(sourceCdn: SourceCdnReq  | undefined) {
        this['source_cdn'] = sourceCdn;
    }
    public get sourceCdn(): SourceCdnReq | undefined {
        return this['source_cdn'];
    }
}