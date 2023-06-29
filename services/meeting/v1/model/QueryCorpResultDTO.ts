import { OrgGroupDTO } from './OrgGroupDTO';
import { QueryAdminResultDTO } from './QueryAdminResultDTO';
import { QueryCorpBasicResultDTO } from './QueryCorpBasicResultDTO';
import { QueryCorpResResultDTO } from './QueryCorpResResultDTO';


export class QueryCorpResultDTO {
    public basicInfo?: QueryCorpBasicResultDTO;
    public adminInfo?: QueryAdminResultDTO;
    public resInfo?: QueryCorpResResultDTO;
    public groupDTO?: OrgGroupDTO;
    public id?: string;
    public constructor() { 
    }
    public withBasicInfo(basicInfo: QueryCorpBasicResultDTO): QueryCorpResultDTO {
        this['basicInfo'] = basicInfo;
        return this;
    }
    public withAdminInfo(adminInfo: QueryAdminResultDTO): QueryCorpResultDTO {
        this['adminInfo'] = adminInfo;
        return this;
    }
    public withResInfo(resInfo: QueryCorpResResultDTO): QueryCorpResultDTO {
        this['resInfo'] = resInfo;
        return this;
    }
    public withGroupDTO(groupDTO: OrgGroupDTO): QueryCorpResultDTO {
        this['groupDTO'] = groupDTO;
        return this;
    }
    public withId(id: string): QueryCorpResultDTO {
        this['id'] = id;
        return this;
    }
}