import { CorpBasicInfoDTO } from './CorpBasicInfoDTO';
import { QueryDeviceInfoResultDTO } from './QueryDeviceInfoResultDTO';
import { UserFunctionDTO } from './UserFunctionDTO';
import { UserVmrDTO } from './UserVmrDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMyInfoResponse extends SdkResponse {
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
    public withId(id: string): ShowMyInfoResponse {
        this['id'] = id;
        return this;
    }
    public withUserAccount(userAccount: string): ShowMyInfoResponse {
        this['userAccount'] = userAccount;
        return this;
    }
    public withName(name: string): ShowMyInfoResponse {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): ShowMyInfoResponse {
        this['englishName'] = englishName;
        return this;
    }
    public withPhone(phone: string): ShowMyInfoResponse {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ShowMyInfoResponse {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): ShowMyInfoResponse {
        this['email'] = email;
        return this;
    }
    public withSipNum(sipNum: string): ShowMyInfoResponse {
        this['sipNum'] = sipNum;
        return this;
    }
    public withVmrList(vmrList: Array<UserVmrDTO>): ShowMyInfoResponse {
        this['vmrList'] = vmrList;
        return this;
    }
    public withDeptCode(deptCode: string): ShowMyInfoResponse {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): ShowMyInfoResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): ShowMyInfoResponse {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withUserType(userType: number): ShowMyInfoResponse {
        this['userType'] = userType;
        return this;
    }
    public withAdminType(adminType: number): ShowMyInfoResponse {
        this['adminType'] = adminType;
        return this;
    }
    public withSignature(signature: string): ShowMyInfoResponse {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): ShowMyInfoResponse {
        this['title'] = title;
        return this;
    }
    public withDesc(desc: string): ShowMyInfoResponse {
        this['desc'] = desc;
        return this;
    }
    public withCorp(corp: CorpBasicInfoDTO): ShowMyInfoResponse {
        this['corp'] = corp;
        return this;
    }
    public withFunction(_function: UserFunctionDTO): ShowMyInfoResponse {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: UserFunctionDTO  | undefined) {
        this['function'] = _function;
    }
    public get _function(): UserFunctionDTO | undefined {
        return this['function'];
    }
    public withDevType(devType: QueryDeviceInfoResultDTO): ShowMyInfoResponse {
        this['devType'] = devType;
        return this;
    }
    public withStatus(status: number): ShowMyInfoResponse {
        this['status'] = status;
        return this;
    }
    public withSortLevel(sortLevel: number): ShowMyInfoResponse {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withHidePhone(hidePhone: boolean): ShowMyInfoResponse {
        this['hidePhone'] = hidePhone;
        return this;
    }
    public withVisionAccount(visionAccount: string): ShowMyInfoResponse {
        this['visionAccount'] = visionAccount;
        return this;
    }
    public withThirdAccount(thirdAccount: string): ShowMyInfoResponse {
        this['thirdAccount'] = thirdAccount;
        return this;
    }
    public withLicense(license: number): ShowMyInfoResponse {
        this['license'] = license;
        return this;
    }
    public withActiveTime(activeTime: number): ShowMyInfoResponse {
        this['activeTime'] = activeTime;
        return this;
    }
}