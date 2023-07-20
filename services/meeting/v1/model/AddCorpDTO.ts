import { AddCorpResDTO } from './AddCorpResDTO';
import { AdminDTO } from './AdminDTO';
import { CorpBasicDTO } from './CorpBasicDTO';
import { OrgPropertyDTO } from './OrgPropertyDTO';


export class AddCorpDTO {
    public basicInfo?: CorpBasicDTO;
    public adminInfo?: AdminDTO;
    public resInfo?: AddCorpResDTO;
    public groupId?: string;
    public propertyInfo?: Array<OrgPropertyDTO>;
    public constructor(basicInfo?: CorpBasicDTO, adminInfo?: AdminDTO) { 
        this['basicInfo'] = basicInfo;
        this['adminInfo'] = adminInfo;
    }
    public withBasicInfo(basicInfo: CorpBasicDTO): AddCorpDTO {
        this['basicInfo'] = basicInfo;
        return this;
    }
    public withAdminInfo(adminInfo: AdminDTO): AddCorpDTO {
        this['adminInfo'] = adminInfo;
        return this;
    }
    public withResInfo(resInfo: AddCorpResDTO): AddCorpDTO {
        this['resInfo'] = resInfo;
        return this;
    }
    public withGroupId(groupId: string): AddCorpDTO {
        this['groupId'] = groupId;
        return this;
    }
    public withPropertyInfo(propertyInfo: Array<OrgPropertyDTO>): AddCorpDTO {
        this['propertyInfo'] = propertyInfo;
        return this;
    }
}