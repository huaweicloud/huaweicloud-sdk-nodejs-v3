import { AvailabilityZoneInfo } from './AvailabilityZoneInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAzResponse extends SdkResponse {
    public azs?: { [key: string]: Array<AvailabilityZoneInfo>; };
    private 'default_type'?: string;
    private 'support_type'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAzs(azs: { [key: string]: Array<AvailabilityZoneInfo>; }): ListAzResponse {
        this['azs'] = azs;
        return this;
    }
    public withDefaultType(defaultType: string): ListAzResponse {
        this['default_type'] = defaultType;
        return this;
    }
    public set defaultType(defaultType: string  | undefined) {
        this['default_type'] = defaultType;
    }
    public get defaultType(): string | undefined {
        return this['default_type'];
    }
    public withSupportType(supportType: Array<string>): ListAzResponse {
        this['support_type'] = supportType;
        return this;
    }
    public set supportType(supportType: Array<string>  | undefined) {
        this['support_type'] = supportType;
    }
    public get supportType(): Array<string> | undefined {
        return this['support_type'];
    }
}