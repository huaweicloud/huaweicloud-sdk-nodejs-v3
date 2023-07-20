

export class ModDeviceDTO {
    public name?: string;
    public prjCodeMode?: ModDeviceDTOPrjCodeModeEnum | number;
    public deptCode?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public description?: string;
    public status?: ModDeviceDTOStatusEnum | number;
    public constructor() { 
    }
    public withName(name: string): ModDeviceDTO {
        this['name'] = name;
        return this;
    }
    public withPrjCodeMode(prjCodeMode: ModDeviceDTOPrjCodeModeEnum | number): ModDeviceDTO {
        this['prjCodeMode'] = prjCodeMode;
        return this;
    }
    public withDeptCode(deptCode: string): ModDeviceDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withPhone(phone: string): ModDeviceDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ModDeviceDTO {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): ModDeviceDTO {
        this['email'] = email;
        return this;
    }
    public withDescription(description: string): ModDeviceDTO {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ModDeviceDTOStatusEnum | number): ModDeviceDTO {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModDeviceDTOPrjCodeModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ModDeviceDTOStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
