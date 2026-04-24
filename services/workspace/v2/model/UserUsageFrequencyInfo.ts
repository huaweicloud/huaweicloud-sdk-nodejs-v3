

export class UserUsageFrequencyInfo {
    private 'user_name'?: string;
    private 'use_count'?: number;
    public constructor() { 
    }
    public withUserName(userName: string): UserUsageFrequencyInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUseCount(useCount: number): UserUsageFrequencyInfo {
        this['use_count'] = useCount;
        return this;
    }
    public set useCount(useCount: number  | undefined) {
        this['use_count'] = useCount;
    }
    public get useCount(): number | undefined {
        return this['use_count'];
    }
}