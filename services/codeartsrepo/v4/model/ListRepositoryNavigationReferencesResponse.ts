import { DefEntryDto } from './DefEntryDto';
import { RefEntryDto } from './RefEntryDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryNavigationReferencesResponse extends SdkResponse {
    public result?: string;
    public message?: string;
    public defs?: Array<DefEntryDto>;
    public refs?: Array<RefEntryDto>;
    public constructor() { 
        super();
    }
    public withResult(result: string): ListRepositoryNavigationReferencesResponse {
        this['result'] = result;
        return this;
    }
    public withMessage(message: string): ListRepositoryNavigationReferencesResponse {
        this['message'] = message;
        return this;
    }
    public withDefs(defs: Array<DefEntryDto>): ListRepositoryNavigationReferencesResponse {
        this['defs'] = defs;
        return this;
    }
    public withRefs(refs: Array<RefEntryDto>): ListRepositoryNavigationReferencesResponse {
        this['refs'] = refs;
        return this;
    }
}