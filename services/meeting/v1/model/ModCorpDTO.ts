import { ModAdminDTO } from './ModAdminDTO';
import { ModCorpBasicDTO } from './ModCorpBasicDTO';
import { OrgPropertyDTO } from './OrgPropertyDTO';


export class ModCorpDTO {
    public basicInfo?: ModCorpBasicDTO;
    public adminInfo?: ModAdminDTO;
    public groupId?: string;
    public propertyInfo?: Array<OrgPropertyDTO>;
    public constructor() { 
    }
    public withBasicInfo(basicInfo: ModCorpBasicDTO): ModCorpDTO {
        this['basicInfo'] = basicInfo;
        return this;
    }
    public withAdminInfo(adminInfo: ModAdminDTO): ModCorpDTO {
        this['adminInfo'] = adminInfo;
        return this;
    }
    public withGroupId(groupId: string): ModCorpDTO {
        this['groupId'] = groupId;
        return this;
    }
    public withPropertyInfo(propertyInfo: Array<OrgPropertyDTO>): ModCorpDTO {
        this['propertyInfo'] = propertyInfo;
        return this;
    }
}