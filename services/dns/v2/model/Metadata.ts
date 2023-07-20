

export class Metadata {
    private 'total_count'?: number;
    public constructor() { 
    }
    public withTotalCount(totalCount: number): Metadata {
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