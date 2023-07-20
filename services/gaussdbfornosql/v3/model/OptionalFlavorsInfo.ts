import { ComputeFlavor } from './ComputeFlavor';


export class OptionalFlavorsInfo {
    public list?: Array<ComputeFlavor>;
    private 'total_count'?: number;
    public constructor(list?: Array<ComputeFlavor>, totalCount?: number) { 
        this['list'] = list;
        this['total_count'] = totalCount;
    }
    public withList(list: Array<ComputeFlavor>): OptionalFlavorsInfo {
        this['list'] = list;
        return this;
    }
    public withTotalCount(totalCount: number): OptionalFlavorsInfo {
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