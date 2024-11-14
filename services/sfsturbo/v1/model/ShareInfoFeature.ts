

export class ShareInfoFeature {
    private 'is_support'?: boolean;
    public message?: string;
    private 'msg_code'?: string;
    public constructor() { 
    }
    public withIsSupport(isSupport: boolean): ShareInfoFeature {
        this['is_support'] = isSupport;
        return this;
    }
    public set isSupport(isSupport: boolean  | undefined) {
        this['is_support'] = isSupport;
    }
    public get isSupport(): boolean | undefined {
        return this['is_support'];
    }
    public withMessage(message: string): ShareInfoFeature {
        this['message'] = message;
        return this;
    }
    public withMsgCode(msgCode: string): ShareInfoFeature {
        this['msg_code'] = msgCode;
        return this;
    }
    public set msgCode(msgCode: string  | undefined) {
        this['msg_code'] = msgCode;
    }
    public get msgCode(): string | undefined {
        return this['msg_code'];
    }
}