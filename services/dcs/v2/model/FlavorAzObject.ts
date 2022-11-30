

export class FlavorAzObject {
    public capacity?: string;
    private 'az_codes'?: Array<string> | undefined;
    public constructor() { 
    }
    public withCapacity(capacity: string): FlavorAzObject {
        this['capacity'] = capacity;
        return this;
    }
    public withAzCodes(azCodes: Array<string>): FlavorAzObject {
        this['az_codes'] = azCodes;
        return this;
    }
    public set azCodes(azCodes: Array<string> | undefined) {
        this['az_codes'] = azCodes;
    }
    public get azCodes() {
        return this['az_codes'];
    }
}