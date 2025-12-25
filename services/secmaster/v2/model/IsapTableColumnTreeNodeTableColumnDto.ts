import { IsapTableColumnDto } from './IsapTableColumnDto';


export class IsapTableColumnTreeNodeTableColumnDto {
    public name?: string;
    private 'parent_name'?: string;
    private 'own_name'?: string;
    public depth?: number;
    public source?: IsapTableColumnDto;
    public children?: Array<IsapTableColumnTreeNodeTableColumnDto>;
    private 'previous_name'?: string;
    private 'column_sequence_number'?: number;
    public constructor() { 
    }
    public withName(name: string): IsapTableColumnTreeNodeTableColumnDto {
        this['name'] = name;
        return this;
    }
    public withParentName(parentName: string): IsapTableColumnTreeNodeTableColumnDto {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
    public withOwnName(ownName: string): IsapTableColumnTreeNodeTableColumnDto {
        this['own_name'] = ownName;
        return this;
    }
    public set ownName(ownName: string  | undefined) {
        this['own_name'] = ownName;
    }
    public get ownName(): string | undefined {
        return this['own_name'];
    }
    public withDepth(depth: number): IsapTableColumnTreeNodeTableColumnDto {
        this['depth'] = depth;
        return this;
    }
    public withSource(source: IsapTableColumnDto): IsapTableColumnTreeNodeTableColumnDto {
        this['source'] = source;
        return this;
    }
    public withChildren(children: Array<IsapTableColumnTreeNodeTableColumnDto>): IsapTableColumnTreeNodeTableColumnDto {
        this['children'] = children;
        return this;
    }
    public withPreviousName(previousName: string): IsapTableColumnTreeNodeTableColumnDto {
        this['previous_name'] = previousName;
        return this;
    }
    public set previousName(previousName: string  | undefined) {
        this['previous_name'] = previousName;
    }
    public get previousName(): string | undefined {
        return this['previous_name'];
    }
    public withColumnSequenceNumber(columnSequenceNumber: number): IsapTableColumnTreeNodeTableColumnDto {
        this['column_sequence_number'] = columnSequenceNumber;
        return this;
    }
    public set columnSequenceNumber(columnSequenceNumber: number  | undefined) {
        this['column_sequence_number'] = columnSequenceNumber;
    }
    public get columnSequenceNumber(): number | undefined {
        return this['column_sequence_number'];
    }
}