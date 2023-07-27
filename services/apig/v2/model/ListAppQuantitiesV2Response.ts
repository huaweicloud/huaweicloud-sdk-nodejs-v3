
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppQuantitiesV2Response extends SdkResponse {
    private 'authed_nums'?: number;
    private 'unauthed_nums'?: number;
    public constructor() { 
        super();
    }
    public withAuthedNums(authedNums: number): ListAppQuantitiesV2Response {
        this['authed_nums'] = authedNums;
        return this;
    }
    public set authedNums(authedNums: number  | undefined) {
        this['authed_nums'] = authedNums;
    }
    public get authedNums(): number | undefined {
        return this['authed_nums'];
    }
    public withUnauthedNums(unauthedNums: number): ListAppQuantitiesV2Response {
        this['unauthed_nums'] = unauthedNums;
        return this;
    }
    public set unauthedNums(unauthedNums: number  | undefined) {
        this['unauthed_nums'] = unauthedNums;
    }
    public get unauthedNums(): number | undefined {
        return this['unauthed_nums'];
    }
}