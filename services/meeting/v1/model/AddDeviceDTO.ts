

export class AddDeviceDTO {
    public name: string;
    public model: string;
    public sn?: string;
    public prjCodeMode?: AddDeviceDTOPrjCodeModeEnum;
    public deptCode?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public description?: string;
    public status?: AddDeviceDTOStatusEnum;
    public sendNotify?: string;
    public constructor(name?: any, model?: any) { 
        this['name'] = name;
        this['model'] = model;
    }
    public withName(name: string): AddDeviceDTO {
        this['name'] = name;
        return this;
    }
    public withModel(model: string): AddDeviceDTO {
        this['model'] = model;
        return this;
    }
    public withSn(sn: string): AddDeviceDTO {
        this['sn'] = sn;
        return this;
    }
    public withPrjCodeMode(prjCodeMode: AddDeviceDTOPrjCodeModeEnum): AddDeviceDTO {
        this['prjCodeMode'] = prjCodeMode;
        return this;
    }
    public withDeptCode(deptCode: string): AddDeviceDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withPhone(phone: string): AddDeviceDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): AddDeviceDTO {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): AddDeviceDTO {
        this['email'] = email;
        return this;
    }
    public withDescription(description: string): AddDeviceDTO {
        this['description'] = description;
        return this;
    }
    public withStatus(status: AddDeviceDTOStatusEnum): AddDeviceDTO {
        this['status'] = status;
        return this;
    }
    public withSendNotify(sendNotify: string): AddDeviceDTO {
        this['sendNotify'] = sendNotify;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddDeviceDTOPrjCodeModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum AddDeviceDTOStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
