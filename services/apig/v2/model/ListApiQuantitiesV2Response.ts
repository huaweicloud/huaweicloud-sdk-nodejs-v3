
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiQuantitiesV2Response extends SdkResponse {
    private 'instance_num'?: number;
    private 'nums_on_release'?: number;
    private 'nums_off_release'?: number;
    public constructor() { 
        super();
    }
    public withInstanceNum(instanceNum: number): ListApiQuantitiesV2Response {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withNumsOnRelease(numsOnRelease: number): ListApiQuantitiesV2Response {
        this['nums_on_release'] = numsOnRelease;
        return this;
    }
    public set numsOnRelease(numsOnRelease: number  | undefined) {
        this['nums_on_release'] = numsOnRelease;
    }
    public get numsOnRelease(): number | undefined {
        return this['nums_on_release'];
    }
    public withNumsOffRelease(numsOffRelease: number): ListApiQuantitiesV2Response {
        this['nums_off_release'] = numsOffRelease;
        return this;
    }
    public set numsOffRelease(numsOffRelease: number  | undefined) {
        this['nums_off_release'] = numsOffRelease;
    }
    public get numsOffRelease(): number | undefined {
        return this['nums_off_release'];
    }
}