
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRandomResponse extends SdkResponse {
    private 'random_data'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRandomData(randomData: string): CreateRandomResponse {
        this['random_data'] = randomData;
        return this;
    }
    public set randomData(randomData: string | undefined) {
        this['random_data'] = randomData;
    }
    public get randomData() {
        return this['random_data'];
    }
}