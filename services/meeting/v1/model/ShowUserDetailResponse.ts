import { CorpBasicInfoDTO } from './CorpBasicInfoDTO';
import { QueryDeviceInfoResultDTO } from './QueryDeviceInfoResultDTO';
import { UserFunctionDTO } from './UserFunctionDTO';
import { UserVmrDTO } from './UserVmrDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserDetailResponse extends SdkResponse {
    public id?: string;
    public userAccount?: string;
    public name?: string;
    public englishName?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public sipNum?: string;
    public vmrList?: Array<UserVmrDTO>;
    public deptCode?: string;
    public deptName?: string;
    public deptNamePath?: string;
    public userType?: number;
    public adminType?: number;
    public signature?: string;
    public title?: string;
    public desc?: string;
    public corp?: CorpBasicInfoDTO;
    private 'function'?: UserFunctionDTO;
    public devType?: QueryDeviceInfoResultDTO;
    public status?: number;
    public sortLevel?: number;
    public hidePhone?: boolean;
    public visionAccount?: string;
    public thirdAccount?: string;
    public license?: number;
    public activeTime?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowUserDetailResponse {
        this['id'] = id;
        return this;
    }
    public withUserAccount(userAccount: string): ShowUserDetailResponse {
        this['userAccount'] = userAccount;
        return this;
    }
    public withName(name: string): ShowUserDetailResponse {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): ShowUserDetailResponse {
        this['englishName'] = englishName;
        return this;
    }
    public withPhone(phone: string): ShowUserDetailResponse {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ShowUserDetailResponse {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): ShowUserDetailResponse {
        this['email'] = email;
        return this;
    }
    public withSipNum(sipNum: string): ShowUserDetailResponse {
        this['sipNum'] = sipNum;
        return this;
    }
    public withVmrList(vmrList: Array<UserVmrDTO>): ShowUserDetailResponse {
        this['vmrList'] = vmrList;
        return this;
    }
    public withDeptCode(deptCode: string): ShowUserDetailResponse {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): ShowUserDetailResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): ShowUserDetailResponse {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withUserType(userType: number): ShowUserDetailResponse {
        this['userType'] = userType;
        return this;
    }
    public withAdminType(adminType: number): ShowUserDetailResponse {
        this['adminType'] = adminType;
        return this;
    }
    public withSignature(signature: string): ShowUserDetailResponse {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): ShowUserDetailResponse {
        this['title'] = title;
        return this;
    }
    public withDesc(desc: string): ShowUserDetailResponse {
        this['desc'] = desc;
        return this;
    }
    public withCorp(corp: CorpBasicInfoDTO): ShowUserDetailResponse {
        this['corp'] = corp;
        return this;
    }
    public withFunction(_function: UserFunctionDTO): ShowUserDetailResponse {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: UserFunctionDTO  | undefined) {
        this['function'] = _function;
    }
    public get _function(): UserFunctionDTO | undefined {
        return this['function'];
    }
    public withDevType(devType: QueryDeviceInfoResultDTO): ShowUserDetailResponse {
        this['devType'] = devType;
        return this;
    }
    public withStatus(status: number): ShowUserDetailResponse {
        this['status'] = status;
        return this;
    }
    public withSortLevel(sortLevel: number): ShowUserDetailResponse {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withHidePhone(hidePhone: boolean): ShowUserDetailResponse {
        this['hidePhone'] = hidePhone;
        return this;
    }
    public withVisionAccount(visionAccount: string): ShowUserDetailResponse {
        this['visionAccount'] = visionAccount;
        return this;
    }
    public withThirdAccount(thirdAccount: string): ShowUserDetailResponse {
        this['thirdAccount'] = thirdAccount;
        return this;
    }
    public withLicense(license: number): ShowUserDetailResponse {
        this['license'] = license;
        return this;
    }
    public withActiveTime(activeTime: number): ShowUserDetailResponse {
        this['activeTime'] = activeTime;
        return this;
    }
}