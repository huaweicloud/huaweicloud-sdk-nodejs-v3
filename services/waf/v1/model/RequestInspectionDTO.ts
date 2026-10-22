

export class RequestInspectionDTO {
    private 'payload_type'?: RequestInspectionDTOPayloadTypeEnum | string;
    public username?: string;
    public password?: string;
    public email?: string;
    public phone?: string;
    public constructor(payloadType?: string, username?: string, password?: string) { 
        this['payload_type'] = payloadType;
        this['username'] = username;
        this['password'] = password;
    }
    public withPayloadType(payloadType: RequestInspectionDTOPayloadTypeEnum | string): RequestInspectionDTO {
        this['payload_type'] = payloadType;
        return this;
    }
    public set payloadType(payloadType: RequestInspectionDTOPayloadTypeEnum | string  | undefined) {
        this['payload_type'] = payloadType;
    }
    public get payloadType(): RequestInspectionDTOPayloadTypeEnum | string | undefined {
        return this['payload_type'];
    }
    public withUsername(username: string): RequestInspectionDTO {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): RequestInspectionDTO {
        this['password'] = password;
        return this;
    }
    public withEmail(email: string): RequestInspectionDTO {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): RequestInspectionDTO {
        this['phone'] = phone;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RequestInspectionDTOPayloadTypeEnum {
    JSON = 'JSON',
    FORM_URLENCODED = 'FORM_URLENCODED'
}
