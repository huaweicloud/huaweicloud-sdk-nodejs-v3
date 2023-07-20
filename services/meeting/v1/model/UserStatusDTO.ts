

export class UserStatusDTO {
    private 'Number'?: string;
    private 'RegStatus'?: string;
    private 'CallStatus'?: string;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): UserStatusDTO {
        this['Number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['Number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['Number'];
    }
    public withRegStatus(regStatus: string): UserStatusDTO {
        this['RegStatus'] = regStatus;
        return this;
    }
    public set regStatus(regStatus: string  | undefined) {
        this['RegStatus'] = regStatus;
    }
    public get regStatus(): string | undefined {
        return this['RegStatus'];
    }
    public withCallStatus(callStatus: string): UserStatusDTO {
        this['CallStatus'] = callStatus;
        return this;
    }
    public set callStatus(callStatus: string  | undefined) {
        this['CallStatus'] = callStatus;
    }
    public get callStatus(): string | undefined {
        return this['CallStatus'];
    }
}