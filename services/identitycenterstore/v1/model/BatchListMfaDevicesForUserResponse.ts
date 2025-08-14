import { RetrieveMfaDevicesForUserEntryDto } from './RetrieveMfaDevicesForUserEntryDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListMfaDevicesForUserResponse extends SdkResponse {
    private 'user_mfa_devices_entry_list'?: Array<RetrieveMfaDevicesForUserEntryDto>;
    public constructor() { 
        super();
    }
    public withUserMfaDevicesEntryList(userMfaDevicesEntryList: Array<RetrieveMfaDevicesForUserEntryDto>): BatchListMfaDevicesForUserResponse {
        this['user_mfa_devices_entry_list'] = userMfaDevicesEntryList;
        return this;
    }
    public set userMfaDevicesEntryList(userMfaDevicesEntryList: Array<RetrieveMfaDevicesForUserEntryDto>  | undefined) {
        this['user_mfa_devices_entry_list'] = userMfaDevicesEntryList;
    }
    public get userMfaDevicesEntryList(): Array<RetrieveMfaDevicesForUserEntryDto> | undefined {
        return this['user_mfa_devices_entry_list'];
    }
}