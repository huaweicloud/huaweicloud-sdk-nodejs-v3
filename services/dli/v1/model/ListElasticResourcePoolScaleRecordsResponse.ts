
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListElasticResourcePoolScaleRecordsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<Array<object>>;
    private 'X-Auth-Token'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListElasticResourcePoolScaleRecordsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<Array<object>>): ListElasticResourcePoolScaleRecordsResponse {
        this['items'] = items;
        return this;
    }
    public withXAuthToken(xAuthToken: string): ListElasticResourcePoolScaleRecordsResponse {
        this['X-Auth-Token'] = xAuthToken;
        return this;
    }
    public set xAuthToken(xAuthToken: string  | undefined) {
        this['X-Auth-Token'] = xAuthToken;
    }
    public get xAuthToken(): string | undefined {
        return this['X-Auth-Token'];
    }
}