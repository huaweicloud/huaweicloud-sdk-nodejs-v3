
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDasCloudDbaPriceResponse extends SdkResponse {
    private 'base_price'?: number;
    private 'original_base_price'?: number;
    private 'storage_price'?: number;
    private 'original_storage_price'?: number;
    private 'dump_price'?: number;
    private 'original_dump_price'?: number;
    private 'measure_id'?: number;
    public currency?: string;
    private 'configure_price'?: number;
    public constructor() { 
        super();
    }
    public withBasePrice(basePrice: number): ShowDasCloudDbaPriceResponse {
        this['base_price'] = basePrice;
        return this;
    }
    public set basePrice(basePrice: number  | undefined) {
        this['base_price'] = basePrice;
    }
    public get basePrice(): number | undefined {
        return this['base_price'];
    }
    public withOriginalBasePrice(originalBasePrice: number): ShowDasCloudDbaPriceResponse {
        this['original_base_price'] = originalBasePrice;
        return this;
    }
    public set originalBasePrice(originalBasePrice: number  | undefined) {
        this['original_base_price'] = originalBasePrice;
    }
    public get originalBasePrice(): number | undefined {
        return this['original_base_price'];
    }
    public withStoragePrice(storagePrice: number): ShowDasCloudDbaPriceResponse {
        this['storage_price'] = storagePrice;
        return this;
    }
    public set storagePrice(storagePrice: number  | undefined) {
        this['storage_price'] = storagePrice;
    }
    public get storagePrice(): number | undefined {
        return this['storage_price'];
    }
    public withOriginalStoragePrice(originalStoragePrice: number): ShowDasCloudDbaPriceResponse {
        this['original_storage_price'] = originalStoragePrice;
        return this;
    }
    public set originalStoragePrice(originalStoragePrice: number  | undefined) {
        this['original_storage_price'] = originalStoragePrice;
    }
    public get originalStoragePrice(): number | undefined {
        return this['original_storage_price'];
    }
    public withDumpPrice(dumpPrice: number): ShowDasCloudDbaPriceResponse {
        this['dump_price'] = dumpPrice;
        return this;
    }
    public set dumpPrice(dumpPrice: number  | undefined) {
        this['dump_price'] = dumpPrice;
    }
    public get dumpPrice(): number | undefined {
        return this['dump_price'];
    }
    public withOriginalDumpPrice(originalDumpPrice: number): ShowDasCloudDbaPriceResponse {
        this['original_dump_price'] = originalDumpPrice;
        return this;
    }
    public set originalDumpPrice(originalDumpPrice: number  | undefined) {
        this['original_dump_price'] = originalDumpPrice;
    }
    public get originalDumpPrice(): number | undefined {
        return this['original_dump_price'];
    }
    public withMeasureId(measureId: number): ShowDasCloudDbaPriceResponse {
        this['measure_id'] = measureId;
        return this;
    }
    public set measureId(measureId: number  | undefined) {
        this['measure_id'] = measureId;
    }
    public get measureId(): number | undefined {
        return this['measure_id'];
    }
    public withCurrency(currency: string): ShowDasCloudDbaPriceResponse {
        this['currency'] = currency;
        return this;
    }
    public withConfigurePrice(configurePrice: number): ShowDasCloudDbaPriceResponse {
        this['configure_price'] = configurePrice;
        return this;
    }
    public set configurePrice(configurePrice: number  | undefined) {
        this['configure_price'] = configurePrice;
    }
    public get configurePrice(): number | undefined {
        return this['configure_price'];
    }
}