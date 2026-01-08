
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInconsistentStaticsResponse extends SdkResponse {
    private 'product_id'?: number;
    private 'image_id'?: number;
    private 'disk_num'?: number;
    private 'disk_size'?: number;
    public constructor() { 
        super();
    }
    public withProductId(productId: number): ListInconsistentStaticsResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: number  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): number | undefined {
        return this['product_id'];
    }
    public withImageId(imageId: number): ListInconsistentStaticsResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: number  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): number | undefined {
        return this['image_id'];
    }
    public withDiskNum(diskNum: number): ListInconsistentStaticsResponse {
        this['disk_num'] = diskNum;
        return this;
    }
    public set diskNum(diskNum: number  | undefined) {
        this['disk_num'] = diskNum;
    }
    public get diskNum(): number | undefined {
        return this['disk_num'];
    }
    public withDiskSize(diskSize: number): ListInconsistentStaticsResponse {
        this['disk_size'] = diskSize;
        return this;
    }
    public set diskSize(diskSize: number  | undefined) {
        this['disk_size'] = diskSize;
    }
    public get diskSize(): number | undefined {
        return this['disk_size'];
    }
}