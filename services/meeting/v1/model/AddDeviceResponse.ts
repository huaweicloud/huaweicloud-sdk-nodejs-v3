
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDeviceResponse extends SdkResponse {
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
    public withName(name: string): AddDeviceResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): AddDeviceResponse {
        this['type'] = type;
        return this;
    }
    public withModel(model: string): AddDeviceResponse {
        this['model'] = model;
        return this;
    }
    public withSn(sn: string): AddDeviceResponse {
        this['sn'] = sn;
        return this;
    }
    public withAccount(account: string): AddDeviceResponse {
        this['account'] = account;
        return this;
    }
    public withModelNumber(modelNumber: string): AddDeviceResponse {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withPrjCodeMode(prjCodeMode: number): AddDeviceResponse {
        this['prjCodeMode'] = prjCodeMode;
        return this;
    }
    public withDeptCode(deptCode: string): AddDeviceResponse {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): AddDeviceResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): AddDeviceResponse {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withPhone(phone: string): AddDeviceResponse {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): AddDeviceResponse {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): AddDeviceResponse {
        this['email'] = email;
        return this;
    }
    public withDescription(description: string): AddDeviceResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): AddDeviceResponse {
        this['status'] = status;
        return this;
    }
}