import { ObjectWithColumnInfo } from './ObjectWithColumnInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowObjectColumnInfoResponse extends SdkResponse {
    private 'object_with_column_infos'?: Array<ObjectWithColumnInfo>;
    public constructor() { 
        super();
    }
    public withObjectWithColumnInfos(objectWithColumnInfos: Array<ObjectWithColumnInfo>): ShowObjectColumnInfoResponse {
        this['object_with_column_infos'] = objectWithColumnInfos;
        return this;
    }
    public set objectWithColumnInfos(objectWithColumnInfos: Array<ObjectWithColumnInfo>  | undefined) {
        this['object_with_column_infos'] = objectWithColumnInfos;
    }
    public get objectWithColumnInfos(): Array<ObjectWithColumnInfo> | undefined {
        return this['object_with_column_infos'];
    }
}