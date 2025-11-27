

export class RecordSet {
    public id?: string;
    public description?: string;
    private 'zone_id'?: string;
    private 'zone_name'?: string;
    public type?: string;
    private 'project_id'?: string;
    public name?: string;
    public ttl?: number;
    public records?: Array<string>;
    public weight?: number;
    public line?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    private 'default'?: boolean;
    public constructor(id?: string, name?: string, ttl?: number, records?: Array<string>, weight?: number, line?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['ttl'] = ttl;
        this['records'] = records;
        this['weight'] = weight;
        this['line'] = line;
    }
    public withId(id: string): RecordSet {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): RecordSet {
        this['description'] = description;
        return this;
    }
    public withZoneId(zoneId: string): RecordSet {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withZoneName(zoneName: string): RecordSet {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withType(type: string): RecordSet {
        this['type'] = type;
        return this;
    }
    public withProjectId(projectId: string): RecordSet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): RecordSet {
        this['name'] = name;
        return this;
    }
    public withTtl(ttl: number): RecordSet {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): RecordSet {
        this['records'] = records;
        return this;
    }
    public withWeight(weight: number): RecordSet {
        this['weight'] = weight;
        return this;
    }
    public withLine(line: string): RecordSet {
        this['line'] = line;
        return this;
    }
    public withCreateAt(createAt: string): RecordSet {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): RecordSet {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withDefault(_default: boolean): RecordSet {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
}