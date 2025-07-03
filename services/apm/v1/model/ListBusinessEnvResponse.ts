import { EnvEntry } from './EnvEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBusinessEnvResponse extends SdkResponse {
    private 'env_entry_list'?: Array<EnvEntry>;
    public constructor() { 
        super();
    }
    public withEnvEntryList(envEntryList: Array<EnvEntry>): ListBusinessEnvResponse {
        this['env_entry_list'] = envEntryList;
        return this;
    }
    public set envEntryList(envEntryList: Array<EnvEntry>  | undefined) {
        this['env_entry_list'] = envEntryList;
    }
    public get envEntryList(): Array<EnvEntry> | undefined {
        return this['env_entry_list'];
    }
}