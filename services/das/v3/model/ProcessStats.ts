

export class ProcessStats {
    public key?: string;
    public value?: string;
    private 'active_count'?: number;
    private 'total_count'?: number;
    public constructor() { 
    }
    public withKey(key: string): ProcessStats {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ProcessStats {
        this['value'] = value;
        return this;
    }
    public withActiveCount(activeCount: number): ProcessStats {
        this['active_count'] = activeCount;
        return this;
    }
    public set activeCount(activeCount: number  | undefined) {
        this['active_count'] = activeCount;
    }
    public get activeCount(): number | undefined {
        return this['active_count'];
    }
    public withTotalCount(totalCount: number): ProcessStats {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}