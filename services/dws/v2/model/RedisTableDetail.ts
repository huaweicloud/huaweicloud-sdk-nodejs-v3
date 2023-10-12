import { RedisTable } from './RedisTable';


export class RedisTableDetail {
    public data?: Array<RedisTable>;
    public total?: number;
    public constructor() { 
    }
    public withData(data: Array<RedisTable>): RedisTableDetail {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): RedisTableDetail {
        this['total'] = total;
        return this;
    }
}