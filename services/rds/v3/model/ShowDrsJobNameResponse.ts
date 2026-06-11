
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDrsJobNameResponse extends SdkResponse {
    private 'drs_name'?: string;
    public constructor() { 
        super();
    }
    public withDrsName(drsName: string): ShowDrsJobNameResponse {
        this['drs_name'] = drsName;
        return this;
    }
    public set drsName(drsName: string  | undefined) {
        this['drs_name'] = drsName;
    }
    public get drsName(): string | undefined {
        return this['drs_name'];
    }
}