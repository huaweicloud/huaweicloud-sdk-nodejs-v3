import { AzInfo } from './AzInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAzsResponse extends SdkResponse {
    private 'support_type'?: Array<string>;
    private 'default_type'?: string;
    public azs?: { [key: string]: Array<AzInfo>; };
    public constructor() { 
        super();
    }
    public withSupportType(supportType: Array<string>): ListAzsResponse {
        this['support_type'] = supportType;
        return this;
    }
    public set supportType(supportType: Array<string>  | undefined) {
        this['support_type'] = supportType;
    }
    public get supportType(): Array<string> | undefined {
        return this['support_type'];
    }
    public withDefaultType(defaultType: string): ListAzsResponse {
        this['default_type'] = defaultType;
        return this;
    }
    public set defaultType(defaultType: string  | undefined) {
        this['default_type'] = defaultType;
    }
    public get defaultType(): string | undefined {
        return this['default_type'];
    }
    public withAzs(azs: { [key: string]: Array<AzInfo>; }): ListAzsResponse {
        this['azs'] = azs;
        return this;
    }
}