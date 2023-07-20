import { ExtensionsResponse } from './ExtensionsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPostgresqlExtensionResponse extends SdkResponse {
    public extensions?: Array<ExtensionsResponse>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withExtensions(extensions: Array<ExtensionsResponse>): ListPostgresqlExtensionResponse {
        this['extensions'] = extensions;
        return this;
    }
    public withTotalCount(totalCount: number): ListPostgresqlExtensionResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}