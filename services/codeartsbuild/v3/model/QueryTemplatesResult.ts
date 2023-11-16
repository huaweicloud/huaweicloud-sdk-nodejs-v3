import { QueryTemplatesItems } from './QueryTemplatesItems';


export class QueryTemplatesResult {
    private 'total_size'?: number;
    public items?: Array<QueryTemplatesItems>;
    public constructor() { 
    }
    public withTotalSize(totalSize: number): QueryTemplatesResult {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
    public withItems(items: Array<QueryTemplatesItems>): QueryTemplatesResult {
        this['items'] = items;
        return this;
    }
}