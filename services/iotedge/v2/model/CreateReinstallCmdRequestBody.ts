

export class CreateReinstallCmdRequestBody {
    private 'device_secret'?: string;
    private 'verify_code'?: string;
    public constructor() { 
    }
    public withDeviceSecret(deviceSecret: string): CreateReinstallCmdRequestBody {
        this['device_secret'] = deviceSecret;
        return this;
    }
    public set deviceSecret(deviceSecret: string  | undefined) {
        this['device_secret'] = deviceSecret;
    }
    public get deviceSecret(): string | undefined {
        return this['device_secret'];
    }
    public withVerifyCode(verifyCode: string): CreateReinstallCmdRequestBody {
        this['verify_code'] = verifyCode;
        return this;
    }
    public set verifyCode(verifyCode: string  | undefined) {
        this['verify_code'] = verifyCode;
    }
    public get verifyCode(): string | undefined {
        return this['verify_code'];
    }
}