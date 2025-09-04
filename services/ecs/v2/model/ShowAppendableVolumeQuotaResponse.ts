
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppendableVolumeQuotaResponse extends SdkResponse {
    private 'free_scsi'?: number;
    public count?: number;
    private 'free_blk'?: number;
    public constructor() { 
        super();
    }
    public withFreeScsi(freeScsi: number): ShowAppendableVolumeQuotaResponse {
        this['free_scsi'] = freeScsi;
        return this;
    }
    public set freeScsi(freeScsi: number  | undefined) {
        this['free_scsi'] = freeScsi;
    }
    public get freeScsi(): number | undefined {
        return this['free_scsi'];
    }
    public withCount(count: number): ShowAppendableVolumeQuotaResponse {
        this['count'] = count;
        return this;
    }
    public withFreeBlk(freeBlk: number): ShowAppendableVolumeQuotaResponse {
        this['free_blk'] = freeBlk;
        return this;
    }
    public set freeBlk(freeBlk: number  | undefined) {
        this['free_blk'] = freeBlk;
    }
    public get freeBlk(): number | undefined {
        return this['free_blk'];
    }
}