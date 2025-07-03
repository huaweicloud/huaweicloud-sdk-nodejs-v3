

export class StartKibanaPublicReqElbWhitelist {
    private 'enable_white_list'?: boolean;
    private 'white_list'?: string;
    public constructor(enableWhiteList?: boolean, whiteList?: string) { 
        this['enable_white_list'] = enableWhiteList;
        this['white_list'] = whiteList;
    }
    public withEnableWhiteList(enableWhiteList: boolean): StartKibanaPublicReqElbWhitelist {
        this['enable_white_list'] = enableWhiteList;
        return this;
    }
    public set enableWhiteList(enableWhiteList: boolean  | undefined) {
        this['enable_white_list'] = enableWhiteList;
    }
    public get enableWhiteList(): boolean | undefined {
        return this['enable_white_list'];
    }
    public withWhiteList(whiteList: string): StartKibanaPublicReqElbWhitelist {
        this['white_list'] = whiteList;
        return this;
    }
    public set whiteList(whiteList: string  | undefined) {
        this['white_list'] = whiteList;
    }
    public get whiteList(): string | undefined {
        return this['white_list'];
    }
}