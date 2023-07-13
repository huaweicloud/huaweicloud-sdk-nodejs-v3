import { OrgGroupDTO } from './OrgGroupDTO';
import { QueryAdminResultDTO } from './QueryAdminResultDTO';
import { QueryCorpBasicResultDTO } from './QueryCorpBasicResultDTO';
import { QueryCorpResResultDTO } from './QueryCorpResResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCorpResponse extends SdkResponse {
    public basicInfo?: QueryCorpBasicResultDTO;
    public adminInfo?: QueryAdminResultDTO;
    public resInfo?: QueryCorpResResultDTO;
    public groupDTO?: OrgGroupDTO;
    public id?: string;
    public constructor() { 
        super();
    }
    public withBasicInfo(basicInfo: QueryCorpBasicResultDTO): ShowCorpResponse {
        this['basicInfo'] = basicInfo;
        return this;
    }
    public withAdminInfo(adminInfo: QueryAdminResultDTO): ShowCorpResponse {
        this['adminInfo'] = adminInfo;
        return this;
    }
    public withResInfo(resInfo: QueryCorpResResultDTO): ShowCorpResponse {
        this['resInfo'] = resInfo;
        return this;
    }
    public withGroupDTO(groupDTO: OrgGroupDTO): ShowCorpResponse {
        this['groupDTO'] = groupDTO;
        return this;
    }
    public withId(id: string): ShowCorpResponse {
        this['id'] = id;
        return this;
    }
}