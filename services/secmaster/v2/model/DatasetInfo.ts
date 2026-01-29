import { DatasetInfoReference } from './DatasetInfoReference';


export class DatasetInfo {
    public csvc?: string;
    public enable?: string;
    private 'is_region'?: number;
    public reference?: DatasetInfoReference;
    private 'source_id'?: number;
    private 'source_name'?: string;
    public target?: object;
    public type?: number;
    public constructor(csvc?: string, enable?: string, isRegion?: number, reference?: DatasetInfoReference, sourceId?: number, sourceName?: string, target?: object, type?: number) { 
        this['csvc'] = csvc;
        this['enable'] = enable;
        this['is_region'] = isRegion;
        this['reference'] = reference;
        this['source_id'] = sourceId;
        this['source_name'] = sourceName;
        this['target'] = target;
        this['type'] = type;
    }
    public withCsvc(csvc: string): DatasetInfo {
        this['csvc'] = csvc;
        return this;
    }
    public withEnable(enable: string): DatasetInfo {
        this['enable'] = enable;
        return this;
    }
    public withIsRegion(isRegion: number): DatasetInfo {
        this['is_region'] = isRegion;
        return this;
    }
    public set isRegion(isRegion: number  | undefined) {
        this['is_region'] = isRegion;
    }
    public get isRegion(): number | undefined {
        return this['is_region'];
    }
    public withReference(reference: DatasetInfoReference): DatasetInfo {
        this['reference'] = reference;
        return this;
    }
    public withSourceId(sourceId: number): DatasetInfo {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: number  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): number | undefined {
        return this['source_id'];
    }
    public withSourceName(sourceName: string): DatasetInfo {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withTarget(target: object): DatasetInfo {
        this['target'] = target;
        return this;
    }
    public withType(type: number): DatasetInfo {
        this['type'] = type;
        return this;
    }
}