

export class UserStatusDTO {
    private 'Number'?: string | undefined;
    private 'RegStatus'?: string | undefined;
    private 'CallStatus'?: string | undefined;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): UserStatusDTO {
        this['Number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['Number'] = modelNumber;
    }
    public get modelNumber() {
        return this['Number'];
    }
    public withRegStatus(regStatus: string): UserStatusDTO {
        this['RegStatus'] = regStatus;
        return this;
    }
    public set regStatus(regStatus: string | undefined) {
        this['RegStatus'] = regStatus;
    }
    public get regStatus() {
        return this['RegStatus'];
    }
    public withCallStatus(callStatus: string): UserStatusDTO {
        this['CallStatus'] = callStatus;
        return this;
    }
    public set callStatus(callStatus: string | undefined) {
        this['CallStatus'] = callStatus;
    }
    public get callStatus() {
        return this['CallStatus'];
    }
}