

export class Endpoints {
    private 'dev_service'?: EndpointsDevServiceEnum | string;
    public extensions?: { [key: string]: string; };
    private 'ssh_keys'?: Array<string>;
    public constructor() { 
    }
    public withDevService(devService: EndpointsDevServiceEnum | string): Endpoints {
        this['dev_service'] = devService;
        return this;
    }
    public set devService(devService: EndpointsDevServiceEnum | string  | undefined) {
        this['dev_service'] = devService;
    }
    public get devService(): EndpointsDevServiceEnum | string | undefined {
        return this['dev_service'];
    }
    public withExtensions(extensions: { [key: string]: string; }): Endpoints {
        this['extensions'] = extensions;
        return this;
    }
    public withSshKeys(sshKeys: Array<string>): Endpoints {
        this['ssh_keys'] = sshKeys;
        return this;
    }
    public set sshKeys(sshKeys: Array<string>  | undefined) {
        this['ssh_keys'] = sshKeys;
    }
    public get sshKeys(): Array<string> | undefined {
        return this['ssh_keys'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EndpointsDevServiceEnum {
    AI_FLOW = 'AI_FLOW',
    MA_STUDIO = 'MA_STUDIO',
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH',
    TENSOR_BOARD = 'TENSOR_BOARD',
    WEB_IDE = 'WEB_IDE'
}
