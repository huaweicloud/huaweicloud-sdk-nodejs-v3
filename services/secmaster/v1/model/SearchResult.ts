

export class SearchResult {
    private 'data_source'?: object;
    public timestamp?: number;
    public constructor(dataSource?: object, timestamp?: number) { 
        this['data_source'] = dataSource;
        this['timestamp'] = timestamp;
    }
    public withDataSource(dataSource: object): SearchResult {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: object  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): object | undefined {
        return this['data_source'];
    }
    public withTimestamp(timestamp: number): SearchResult {
        this['timestamp'] = timestamp;
        return this;
    }
}