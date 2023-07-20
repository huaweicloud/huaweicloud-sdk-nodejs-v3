import { CorpBasicInfoDTO } from './CorpBasicInfoDTO';
import { QueryDeviceInfoResultDTO } from './QueryDeviceInfoResultDTO';
import { UserFunctionDTO } from './UserFunctionDTO';
import { UserVmrDTO } from './UserVmrDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddUserResponse extends SdkResponse {
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
    public withId(id: string): AddUserResponse {
        this['id'] = id;
        return this;
    }
    public withUserAccount(userAccount: string): AddUserResponse {
        this['userAccount'] = userAccount;
        return this;
    }
    public withName(name: string): AddUserResponse {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): AddUserResponse {
        this['englishName'] = englishName;
        return this;
    }
    public withPhone(phone: string): AddUserResponse {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): AddUserResponse {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): AddUserResponse {
        this['email'] = email;
        return this;
    }
    public withSipNum(sipNum: string): AddUserResponse {
        this['sipNum'] = sipNum;
        return this;
    }
    public withVmrList(vmrList: Array<UserVmrDTO>): AddUserResponse {
        this['vmrList'] = vmrList;
        return this;
    }
    public withDeptCode(deptCode: string): AddUserResponse {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): AddUserResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): AddUserResponse {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withUserType(userType: number): AddUserResponse {
        this['userType'] = userType;
        return this;
    }
    public withAdminType(adminType: number): AddUserResponse {
        this['adminType'] = adminType;
        return this;
    }
    public withSignature(signature: string): AddUserResponse {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): AddUserResponse {
        this['title'] = title;
        return this;
    }
    public withDesc(desc: string): AddUserResponse {
        this['desc'] = desc;
        return this;
    }
    public withCorp(corp: CorpBasicInfoDTO): AddUserResponse {
        this['corp'] = corp;
        return this;
    }
    public withFunction(_function: UserFunctionDTO): AddUserResponse {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: UserFunctionDTO  | undefined) {
        this['function'] = _function;
    }
    public get _function(): UserFunctionDTO | undefined {
        return this['function'];
    }
    public withDevType(devType: QueryDeviceInfoResultDTO): AddUserResponse {
        this['devType'] = devType;
        return this;
    }
    public withStatus(status: number): AddUserResponse {
        this['status'] = status;
        return this;
    }
    public withSortLevel(sortLevel: number): AddUserResponse {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withHidePhone(hidePhone: boolean): AddUserResponse {
        this['hidePhone'] = hidePhone;
        return this;
    }
    public withVisionAccount(visionAccount: string): AddUserResponse {
        this['visionAccount'] = visionAccount;
        return this;
    }
    public withThirdAccount(thirdAccount: string): AddUserResponse {
        this['thirdAccount'] = thirdAccount;
        return this;
    }
    public withLicense(license: number): AddUserResponse {
        this['license'] = license;
        return this;
    }
    public withActiveTime(activeTime: number): AddUserResponse {
        this['activeTime'] = activeTime;
        return this;
    }
}