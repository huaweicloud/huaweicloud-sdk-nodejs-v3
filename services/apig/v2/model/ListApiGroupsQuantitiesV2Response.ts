
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiGroupsQuantitiesV2Response extends SdkResponse {
    private 'offsell_nums'?: number;
    private 'onsell_nums'?: number;
    public constructor() { 
        super();
    }
    public withOffsellNums(offsellNums: number): ListApiGroupsQuantitiesV2Response {
        this['offsell_nums'] = offsellNums;
        return this;
    }
    public set offsellNums(offsellNums: number  | undefined) {
        this['offsell_nums'] = offsellNums;
    }
    public get offsellNums(): number | undefined {
        return this['offsell_nums'];
    }
    public withOnsellNums(onsellNums: number): ListApiGroupsQuantitiesV2Response {
        this['onsell_nums'] = onsellNums;
        return this;
    }
    public set onsellNums(onsellNums: number  | undefined) {
        this['onsell_nums'] = onsellNums;
    }
    public get onsellNums(): number | undefined {
        return this['onsell_nums'];
    }
}