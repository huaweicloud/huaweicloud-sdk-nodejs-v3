import { CountdownList } from './CountdownList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPackageSpecCountDownResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: Array<CountdownList>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowPackageSpecCountDownResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowPackageSpecCountDownResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Array<CountdownList>): ShowPackageSpecCountDownResponse {
        this['result'] = result;
        return this;
    }
}