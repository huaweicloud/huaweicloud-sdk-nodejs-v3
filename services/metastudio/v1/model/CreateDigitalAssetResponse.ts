
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDigitalAssetResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'produce_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): CreateDigitalAssetResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withProduceId(produceId: string): CreateDigitalAssetResponse {
        this['produce_id'] = produceId;
        return this;
    }
    public set produceId(produceId: string  | undefined) {
        this['produce_id'] = produceId;
    }
    public get produceId(): string | undefined {
        return this['produce_id'];
    }
    public withXRequestId(xRequestId: string): CreateDigitalAssetResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}