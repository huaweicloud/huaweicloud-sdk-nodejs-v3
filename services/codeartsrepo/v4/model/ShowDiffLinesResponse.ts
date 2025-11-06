
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiffLinesResponse extends SdkResponse {
    public text?: string;
    public constructor() { 
        super();
    }
    public withText(text: string): ShowDiffLinesResponse {
        this['text'] = text;
        return this;
    }
}