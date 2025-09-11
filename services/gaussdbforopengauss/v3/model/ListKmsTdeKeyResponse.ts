import { ListKmsTdeKeyResponseBodyKeyDetails } from './ListKmsTdeKeyResponseBodyKeyDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKmsTdeKeyResponse extends SdkResponse {
    private 'key_details'?: Array<ListKmsTdeKeyResponseBodyKeyDetails>;
    private 'authorized_id'?: string;
    private 'authorized_name'?: string;
    public constructor() { 
        super();
    }
    public withKeyDetails(keyDetails: Array<ListKmsTdeKeyResponseBodyKeyDetails>): ListKmsTdeKeyResponse {
        this['key_details'] = keyDetails;
        return this;
    }
    public set keyDetails(keyDetails: Array<ListKmsTdeKeyResponseBodyKeyDetails>  | undefined) {
        this['key_details'] = keyDetails;
    }
    public get keyDetails(): Array<ListKmsTdeKeyResponseBodyKeyDetails> | undefined {
        return this['key_details'];
    }
    public withAuthorizedId(authorizedId: string): ListKmsTdeKeyResponse {
        this['authorized_id'] = authorizedId;
        return this;
    }
    public set authorizedId(authorizedId: string  | undefined) {
        this['authorized_id'] = authorizedId;
    }
    public get authorizedId(): string | undefined {
        return this['authorized_id'];
    }
    public withAuthorizedName(authorizedName: string): ListKmsTdeKeyResponse {
        this['authorized_name'] = authorizedName;
        return this;
    }
    public set authorizedName(authorizedName: string  | undefined) {
        this['authorized_name'] = authorizedName;
    }
    public get authorizedName(): string | undefined {
        return this['authorized_name'];
    }
}