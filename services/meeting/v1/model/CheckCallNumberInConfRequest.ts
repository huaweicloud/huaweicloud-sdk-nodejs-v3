

export class CheckCallNumberInConfRequest {
    private 'call_number'?: string;
    public constructor(callNumber?: string) { 
        this['call_number'] = callNumber;
    }
    public withCallNumber(callNumber: string): CheckCallNumberInConfRequest {
        this['call_number'] = callNumber;
        return this;
    }
    public set callNumber(callNumber: string  | undefined) {
        this['call_number'] = callNumber;
    }
    public get callNumber(): string | undefined {
        return this['call_number'];
    }
}