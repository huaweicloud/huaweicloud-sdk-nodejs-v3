import { SupportFastRestoreList } from './SupportFastRestoreList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesSupportFastRestoreResponse extends SdkResponse {
    private 'support_fast_restore_list'?: Array<SupportFastRestoreList>;
    public constructor() { 
        super();
    }
    public withSupportFastRestoreList(supportFastRestoreList: Array<SupportFastRestoreList>): ListInstancesSupportFastRestoreResponse {
        this['support_fast_restore_list'] = supportFastRestoreList;
        return this;
    }
    public set supportFastRestoreList(supportFastRestoreList: Array<SupportFastRestoreList>  | undefined) {
        this['support_fast_restore_list'] = supportFastRestoreList;
    }
    public get supportFastRestoreList(): Array<SupportFastRestoreList> | undefined {
        return this['support_fast_restore_list'];
    }
}