
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDatabaseWaterMarkResponse extends SdkResponse {
    private 'marked_data'?: Array<{ [key: string]: object; }>;
    public constructor() { 
        super();
    }
    public withMarkedData(markedData: Array<{ [key: string]: object; }>): CreateDatabaseWaterMarkResponse {
        this['marked_data'] = markedData;
        return this;
    }
    public set markedData(markedData: Array<{ [key: string]: object; }>  | undefined) {
        this['marked_data'] = markedData;
    }
    public get markedData(): Array<{ [key: string]: object; }> | undefined {
        return this['marked_data'];
    }
}