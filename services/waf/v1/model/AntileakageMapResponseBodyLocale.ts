

export class AntileakageMapResponseBodyLocale {
    public code?: string;
    private 'id_card'?: string;
    public sensitive?: string;
    public phone?: string;
    public responseCode?: string;
    public email?: string;
    public constructor() { 
    }
    public withCode(code: string): AntileakageMapResponseBodyLocale {
        this['code'] = code;
        return this;
    }
    public withIdCard(idCard: string): AntileakageMapResponseBodyLocale {
        this['id_card'] = idCard;
        return this;
    }
    public set idCard(idCard: string  | undefined) {
        this['id_card'] = idCard;
    }
    public get idCard(): string | undefined {
        return this['id_card'];
    }
    public withSensitive(sensitive: string): AntileakageMapResponseBodyLocale {
        this['sensitive'] = sensitive;
        return this;
    }
    public withPhone(phone: string): AntileakageMapResponseBodyLocale {
        this['phone'] = phone;
        return this;
    }
    public withResponseCode(responseCode: string): AntileakageMapResponseBodyLocale {
        this['responseCode'] = responseCode;
        return this;
    }
    public withEmail(email: string): AntileakageMapResponseBodyLocale {
        this['email'] = email;
        return this;
    }
}