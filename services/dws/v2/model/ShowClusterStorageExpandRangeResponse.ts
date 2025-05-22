
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterStorageExpandRangeResponse extends SdkResponse {
    private 'min_size'?: number;
    private 'max_size'?: number;
    private 'current_size'?: number;
    public step?: number;
    public constructor() { 
        super();
    }
    public withMinSize(minSize: number): ShowClusterStorageExpandRangeResponse {
        this['min_size'] = minSize;
        return this;
    }
    public set minSize(minSize: number  | undefined) {
        this['min_size'] = minSize;
    }
    public get minSize(): number | undefined {
        return this['min_size'];
    }
    public withMaxSize(maxSize: number): ShowClusterStorageExpandRangeResponse {
        this['max_size'] = maxSize;
        return this;
    }
    public set maxSize(maxSize: number  | undefined) {
        this['max_size'] = maxSize;
    }
    public get maxSize(): number | undefined {
        return this['max_size'];
    }
    public withCurrentSize(currentSize: number): ShowClusterStorageExpandRangeResponse {
        this['current_size'] = currentSize;
        return this;
    }
    public set currentSize(currentSize: number  | undefined) {
        this['current_size'] = currentSize;
    }
    public get currentSize(): number | undefined {
        return this['current_size'];
    }
    public withStep(step: number): ShowClusterStorageExpandRangeResponse {
        this['step'] = step;
        return this;
    }
}