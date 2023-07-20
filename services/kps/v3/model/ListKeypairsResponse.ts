import { Keypairs } from './Keypairs';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeypairsResponse extends SdkResponse {
    public keypairs?: Array<Keypairs>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withKeypairs(keypairs: Array<Keypairs>): ListKeypairsResponse {
        this['keypairs'] = keypairs;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListKeypairsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}