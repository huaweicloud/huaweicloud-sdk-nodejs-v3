import { QueryTemplatesItems } from './QueryTemplatesItems';


export class QueryCustomTemplatesResult {
    private 'total_size'?: number;
    public items?: Array<QueryTemplatesItems>;
    public constructor() { 
    }
    public withTotalSize(totalSize: number): QueryCustomTemplatesResult {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
    public withItems(items: Array<QueryTemplatesItems>): QueryCustomTemplatesResult {
        this['items'] = items;
        return this;
    }
}