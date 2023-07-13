
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceDetailResponse extends SdkResponse {
    public name?: string;
    public type?: string;
    public model?: string;
    public sn?: string;
    public account?: string;
    private 'number'?: string | undefined;
    public prjCodeMode?: number;
    public deptCode?: string;
    public deptName?: string;
    public deptNamePath?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public description?: string;
    public status?: number;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowDeviceDetailResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ShowDeviceDetailResponse {
        this['type'] = type;
        return this;
    }
    public withModel(model: string): ShowDeviceDetailResponse {
        this['model'] = model;
        return this;
    }
    public withSn(sn: string): ShowDeviceDetailResponse {
        this['sn'] = sn;
        return this;
    }
    public withAccount(account: string): ShowDeviceDetailResponse {
        this['account'] = account;
        return this;
    }
    public withModelNumber(modelNumber: string): ShowDeviceDetailResponse {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withPrjCodeMode(prjCodeMode: number): ShowDeviceDetailResponse {
        this['prjCodeMode'] = prjCodeMode;
        return this;
    }
    public withDeptCode(deptCode: string): ShowDeviceDetailResponse {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): ShowDeviceDetailResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): ShowDeviceDetailResponse {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withPhone(phone: string): ShowDeviceDetailResponse {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ShowDeviceDetailResponse {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): ShowDeviceDetailResponse {
        this['email'] = email;
        return this;
    }
    public withDescription(description: string): ShowDeviceDetailResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): ShowDeviceDetailResponse {
        this['status'] = status;
        return this;
    }
}