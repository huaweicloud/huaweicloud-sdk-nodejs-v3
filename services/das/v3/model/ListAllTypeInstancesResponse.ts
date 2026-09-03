
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllTypeInstancesResponse extends SdkResponse {
    private 'entry_names'?: Array<string>;
    public constructor() { 
        super();
    }
    public withEntryNames(entryNames: Array<string>): ListAllTypeInstancesResponse {
        this['entry_names'] = entryNames;
        return this;
    }
    public set entryNames(entryNames: Array<string>  | undefined) {
        this['entry_names'] = entryNames;
    }
    public get entryNames(): Array<string> | undefined {
        return this['entry_names'];
    }
}