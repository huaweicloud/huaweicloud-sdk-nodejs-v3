

export class ExportTerminalsBindingDesktopsInfoNewRequest {
    public language?: ExportTerminalsBindingDesktopsInfoNewRequestLanguageEnum | string;
    private 'computer_name'?: string;
    public mac?: string;
    public constructor(language?: string) { 
        this['language'] = language;
    }
    public withLanguage(language: ExportTerminalsBindingDesktopsInfoNewRequestLanguageEnum | string): ExportTerminalsBindingDesktopsInfoNewRequest {
        this['language'] = language;
        return this;
    }
    public withComputerName(computerName: string): ExportTerminalsBindingDesktopsInfoNewRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withMac(mac: string): ExportTerminalsBindingDesktopsInfoNewRequest {
        this['mac'] = mac;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportTerminalsBindingDesktopsInfoNewRequestLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US'
}
