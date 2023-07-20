
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollationsResponse extends SdkResponse {
    public charSets?: Array<string>;
    public constructor() { 
        super();
    }
    public withCharSets(charSets: Array<string>): ListCollationsResponse {
        this['charSets'] = charSets;
        return this;
    }
}